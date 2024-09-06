import { ScrollView } from "react-native";

import { styles } from "./HistoryScreen.styles";
import { EmptyState } from "./components/EmptyState/EmptyState";

export const HistoryScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <EmptyState />
    </ScrollView>
  );
};
