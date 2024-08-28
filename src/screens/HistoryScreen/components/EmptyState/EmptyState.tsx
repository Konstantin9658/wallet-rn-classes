import React from "react";
import { Text, View } from "react-native";
import EmptyPlaceholder from "./images/placeholder.svg";
import { styles } from "./EmptyState.styles";
import { Button } from "components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "./EmptyState.types";

export const EmptyState = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToHome = () => navigation.navigate("Send mercoins");

  return (
    <View style={styles.container}>
      <EmptyPlaceholder style={styles.placeholder} />
      <Text style={styles.title}>Transfer History Empty</Text>
      <Text style={styles.description}>
        You haven't sent or received any mercoins&nbsp;yet.
      </Text>
      <Button
        style={styles.button}
        label="Send mercoins"
        onPress={handleNavigateToHome}
      />
    </View>
  );
};
