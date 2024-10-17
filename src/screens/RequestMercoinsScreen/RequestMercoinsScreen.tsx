import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconQR from "./images/qr.svg";
import { ScreenContainer } from "components/ScreenContainer/ScreenContainer";

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});

export const RequestMercoinsScreen = () => {
  return (
    <ScreenContainer
      title="Request Mercoins"
      description="Generate QR-code and grab money."
      imageSrc={require("./images/i120_qr.png")}
      ButtonComponent={
        <Button
          label="Generate QR"
          IconComponent={IconQR}
          isDisabled
          style={styles.button}
        />
      }>
      <Input
        placeholder="Amount of mercoins"
        inputMode="numeric"
        keyboardType="numeric"
      />
    </ScreenContainer>
  );
};
