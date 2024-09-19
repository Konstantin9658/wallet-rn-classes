import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { screensCommonStyles } from "../common.styles";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconWalletIn from "./images/wallet-in.svg";

export const PromocodeScreen = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <View style={screensCommonStyles.container}>
        <Image
          style={screensCommonStyles.image}
          source={require("./images/i120_promo.png")}
        />
        <Text style={screensCommonStyles.title}>Have a Promo Code?</Text>
        <Text style={screensCommonStyles.description}>
          Enter a promo code and grab money.
        </Text>
        <View style={screensCommonStyles.inputContainer}>
          <Input placeholder="6 characters" />
        </View>
        <Button
          label="Get mercoins"
          IconComponent={IconWalletIn}
          isDisabled
          style={screensCommonStyles.button}
        />
      </View>
    </ScrollView>
  );
};
