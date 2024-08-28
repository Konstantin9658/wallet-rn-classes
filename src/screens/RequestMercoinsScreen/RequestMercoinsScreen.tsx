import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { commonStyles } from "../common.styles";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import IconQR from "./images/qr.svg";

export const RequestMercoinsScreen = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <View style={commonStyles.container}>
        <Image
          style={commonStyles.image}
          source={require("./images/i120_qr.png")}
        />
        <Text style={commonStyles.title}>Request Mercoins</Text>
        <Text style={commonStyles.description}>
          Generate QR-code and grab money.
        </Text>
        <View style={commonStyles.inputContainer}>
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
          style={commonStyles.button}
        />
      </View>
    </ScrollView>
  );
};
