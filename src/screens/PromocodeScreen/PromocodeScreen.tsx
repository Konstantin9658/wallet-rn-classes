import React, { useCallback, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconWalletIn from "./images/wallet-in.svg";
import { ScreenContainer } from "components/ScreenContainer/ScreenContainer";
import { Controller, useForm } from "react-hook-form";
import { FormDataPromocode } from "./PromocodeScreen.types";
import { AxiosError } from "axios";
import { postApiCoinsRedeem, useGetApiProfileMe } from "api/backend";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SuccessModal } from "./components/SuccessModal/SuccessModal";

const styles = StyleSheet.create({ button: { marginTop: "auto" } });

export const PromocodeScreen = () => {
  const [earnedMercoins, setEarnedMercoins] = useState<number>(0);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormDataPromocode>({
    defaultValues: {
      promocode: "",
    },
  });

  const { refetch } = useGetApiProfileMe();

  const { promocode } = watch();

  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);

  const onSubmit = useCallback(
    async (data: FormDataPromocode) => {
      bottomSheetModalRef.current?.present();

      try {
        const { count } = await postApiCoinsRedeem({
          promoCode: data.promocode,
        });

        if (count) setEarnedMercoins(count);

        refetch();
        reset();

        bottomSheetModalRef.current?.present();
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.request.status === 404 || e.request.status === 409) {
            setError("promocode", {
              message: "Promo code doesn’t exist or has already been used",
            });
            return;
          }
        }
      }
    },
    [refetch, reset, setError],
  );

  return (
    <ScreenContainer
      title="Have a Promo Code?"
      description="Enter a promo code and grab money."
      imageSrc={require("./images/i120_promo.png")}
      BottomSheetComponent={
        <SuccessModal reward={earnedMercoins} ref={bottomSheetModalRef} />
      }
      ButtonComponent={
        <Button
          label="Get mercoins"
          onPress={handleSubmit(onSubmit)}
          IconComponent={IconWalletIn}
          isDisabled={!promocode || !isValid}
          isLoading={isSubmitting}
          style={styles.button}
        />
      }>
      <Controller
        name="promocode"
        control={control}
        render={({ field }) => (
          <Input
            hasError={!!errors["promocode"]}
            placeholder="6 characters"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={errors.promocode?.message}
          />
        )}
      />
    </ScreenContainer>
  );
};
