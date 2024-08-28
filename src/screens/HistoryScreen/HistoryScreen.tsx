import { ScrollView, Text, View } from "react-native";

import { styles } from "./HistoryScreen.styles";
import { EmptyState } from "./components/EmptyState/EmptyState";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export const HistoryScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <EmptyState />
    </ScrollView>
  );
};
