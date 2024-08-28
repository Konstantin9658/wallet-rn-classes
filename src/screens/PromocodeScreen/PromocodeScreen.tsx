import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { commonStyles } from "../common.styles";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconWalletIn from "./images/wallet-in.svg";

export const PromocodeScreen = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <View style={commonStyles.container}>
        <Image
          style={commonStyles.image}
          source={require("./images/i120_promo.png")}
        />
        <Text style={commonStyles.title}>Have a Promo Code?</Text>
        <Text style={commonStyles.description}>
          Enter a promo code and grab money.
        </Text>
        <View style={commonStyles.inputContainer}>
          <Input placeholder="6 characters" />
        </View>
        <Button
          label="Get mercoins"
          IconComponent={IconWalletIn}
          isDisabled
          style={commonStyles.button}
        />
      </View>
    </ScrollView>
  );
};
