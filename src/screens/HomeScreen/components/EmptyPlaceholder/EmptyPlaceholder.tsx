import { Image, Text, View } from "react-native";
import { styles } from "./EmptyPlaceholder.styles";

export const EmptyPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.placeholder} source={require("./placeholder.png")} />
      <Text style={styles.text}>Not Found Users</Text>
    </View>
  );
};
