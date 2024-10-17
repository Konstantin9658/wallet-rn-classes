import React, { useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { FormDataTransfer } from "./HomeScreen.types";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import {
  postApiCoinsTransfer,
  useGetApiProfileMe,
  useGetApiProfileSearch,
} from "api/backend";
import { EmployeeList } from "./components/EmployeeList/EmployeeList";
import BottomSheet from "@gorhom/bottom-sheet";
import { ScreenContainer } from "components/ScreenContainer/ScreenContainer";

const styles = StyleSheet.create({
  input: {
    pointerEvents: "none",
  },
  button: {
    marginTop: "auto",
  },
});

export const HomeScreen = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [isFocused, setFocused] = useState<boolean>(false);

  const { data: user } = useGetApiProfileMe();
  const { data, isRefetching, isLoading } = useGetApiProfileSearch(
    { Find: searchString, Count: 10 },
    { query: { enabled: searchString.length > 1 } },
  );

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormDataTransfer>({
    defaultValues: {
      email: "",
      to: "",
      amount: 0,
    },
  });
  const { email, amount } = watch();

  const inputRef = useRef<TextInput | null>(null);
  const refRBSheet = useRef<BottomSheet | null>(null);

  const enableToSend =
    user &&
    user.balance &&
    amount &&
    amount > 0 &&
    amount <= user.balance &&
    email &&
    !isSubmitting;

  const handleMercoinsAmountChange =
    (field: ControllerRenderProps<FormDataTransfer, "amount">) =>
    (value: string) => {
      if (!user || !user.balance) return;

      const parsed = parseInt(value);

      field.onChange(parsed > 0 ? parsed : 0);

      return parsed > user.balance
        ? setError("amount", {
            type: "notEnoughCoins",
            message: "You don't have enough coins",
          })
        : clearErrors("amount");
    };

  const onSubmit = useCallback(
    async (data: FormDataTransfer) => {
      if (!enableToSend) {
        return;
      }

      try {
        await postApiCoinsTransfer({
          to: data.email,
          amount: data.amount,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setSearchString("");
        reset();
      }
    },
    [enableToSend, reset],
  );

  return (
    <ScreenContainer
      title="Send Mercoins"
      description="Select a user and specify the number of&nbsp;mercoins to transfer"
      imageSrc={require("./images/i120_mercoin.png")}
      ButtonComponent={
        <Button
          isLoading={isSubmitting}
          label="Send mercoins"
          isDisabled={!enableToSend}
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        />
      }
      BottomSheetComponent={
        isFocused ? (
          <EmployeeList
            inputValue={searchString}
            onValueChange={setValue}
            onChange={setSearchString}
            ref={refRBSheet}
            isRefetching={isRefetching || isLoading}
            employees={data}
          />
        ) : null
      }>
      <Pressable
        onPress={() => {
          setFocused(true);
          refRBSheet.current?.expand();
        }}>
        <Input
          ref={inputRef}
          style={styles.input}
          placeholder="Enter user name or E-mail"
          value={searchString}
        />
      </Pressable>
      <Controller
        name="amount"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Amount of mercoins"
            value={field.value === 0 ? "" : String(field.value)}
            inputMode="numeric"
            hasError={!!errors.amount}
            errorMessage={errors.amount?.message}
            keyboardType="numeric"
            onChangeText={handleMercoinsAmountChange(field)}
          />
        )}
      />
    </ScreenContainer>
  );
};
