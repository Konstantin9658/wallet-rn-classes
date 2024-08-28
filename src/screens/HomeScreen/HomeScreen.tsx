import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { commonStyles } from "screens/common.styles";

export const HomeScreen = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets>
      <View style={commonStyles.container}>
        <Image
          style={commonStyles.image}
          source={require("./images/i120_mercoin.png")}
        />
        <Text style={commonStyles.title}>Send Mercoins</Text>
        <Text style={commonStyles.description}>
          Select a user and specify the number of&nbsp;mercoins to transfer
        </Text>
        <View style={commonStyles.inputContainer}>
          <Input placeholder="Enter user name or E-mail" />
          <Input
            placeholder="Amount of mercoins"
            inputMode="numeric"
            keyboardType="numeric"
          />
        </View>
        <Button label="Send mercoins" isDisabled style={commonStyles.button} />
      </View>
    </ScrollView>
  );
};
