import { ActivityIndicator, Keyboard, Pressable, View } from "react-native";
import { styles } from "./EmployeeList.styles";
import { EmployeeListProps } from "./EmployeeList.types";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { Separator } from "../Separator";
import { Controller, useForm } from "react-hook-form";
import { FormDataTransfer } from "screens/HomeScreen/HomeScreen.types";
import { ProfileSearchResponse } from "api/backend/index.schemas";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { commonStyles } from "common/styles";
import { EmptyPlaceholder } from "../EmptyPlaceholder/EmptyPlaceholder";
import ClearIcon from "assets/icons/clear-icon.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const EmployeeList = forwardRef<BottomSheet, EmployeeListProps>(
  (props, ref) => {
    const {
      employees,
      inputValue,
      isRefetching,
      onChange,
      onValueChange,
      ...rest
    } = props;

    const internalRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => internalRef.current!);

    const { control } = useForm<FormDataTransfer>({
      defaultValues: {
        email: "",
        to: "",
        amount: 0,
      },
    });

    const handlePressAction = (item: ProfileSearchResponse) => () => {
      internalRef.current?.close();
      Keyboard.dismiss();

      onChange(`${item.firstName} ${item.lastName}`);
      onValueChange("email", item.email!);
      onValueChange("to", `${item.firstName} ${item.lastName}`);
    };

    const { top } = useSafeAreaInsets();

    const handleClearAction = () => {
      onChange("");
      onValueChange("email", "");
      onValueChange("to", "");
    };

    return (
      <BottomSheetModal
        ref={internalRef}
        {...rest}
        // bottomInset={bottom}
        topInset={top}
        snapPoints={["100%"]}
        keyboardBehavior="interactive"
        enablePanDownToClose
        enableHandlePanningGesture>
        <View style={styles.header}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Required" }}
            render={() => (
              <View style={styles.inputContainer}>
                <BottomSheetTextInput
                  placeholder="Enter user name or E-mail"
                  autoFocus
                  autoCapitalize="none"
                  value={inputValue}
                  autoCorrect={false}
                  autoComplete="off"
                  onChangeText={onChange}
                  style={styles.input}
                />
                {inputValue ? (
                  <Pressable
                    onPress={handleClearAction}
                    style={styles.clearButton}>
                    <ClearIcon />
                  </Pressable>
                ) : null}
              </View>
            )}
          />
        </View>
        {isRefetching ? (
          <ActivityIndicator size="large" style={commonStyles.flex} />
        ) : (
          <BottomSheetFlatList
            data={employees}
            // style={{ flex: 1, minHeight: "100%" }}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            ListEmptyComponent={EmptyPlaceholder}
            contentContainerStyle={styles.contentContainer}
            ItemSeparatorComponent={Separator}
            keyExtractor={({ email }) => email!}
            renderItem={({ item }) => (
              <EmployeeCard employee={item} onPress={handlePressAction(item)} />
            )}
          />
        )}
      </BottomSheetModal>
    );
  },
);

EmployeeList.displayName = "EmployeeList";
