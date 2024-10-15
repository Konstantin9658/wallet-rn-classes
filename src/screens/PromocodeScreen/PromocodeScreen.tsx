import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconWalletIn from "./images/wallet-in.svg";
import { ScreenContainer } from "components/ScreenContainer/ScreenContainer";

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
});

export const PromocodeScreen = () => {
  return (
    <ScreenContainer
      title="Have a Promo Code?"
      description="Enter a promo code and grab money."
      imageSrc={require("./images/i120_promo.png")}
      ButtonComponent={
        <Button
          label="Get mercoins"
          IconComponent={IconWalletIn}
          isDisabled
          style={styles.button}
        />
      }>
      <Input placeholder="6 characters" />
    </ScreenContainer>
  );
};
