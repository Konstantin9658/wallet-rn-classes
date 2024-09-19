import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { screensCommonStyles } from "../common.styles";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconQR from "./images/qr.svg";

export const RequestMercoinsScreen = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <View style={screensCommonStyles.container}>
        <Image
          style={screensCommonStyles.image}
          source={require("./images/i120_qr.png")}
        />
        <Text style={screensCommonStyles.title}>Request Mercoins</Text>
        <Text style={screensCommonStyles.description}>
          Generate QR-code and grab money.
        </Text>
        <View style={screensCommonStyles.inputContainer}>
          <Input
            placeholder="Amount of mercoins"
            inputMode="numeric"
            keyboardType="numeric"
          />
        </View>
        <Button
          label="Generate QR"
          IconComponent={IconQR}
          isDisabled
          style={screensCommonStyles.button}
        />
      </View>
    </ScrollView>
  );
};
