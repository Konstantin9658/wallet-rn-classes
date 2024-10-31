import { toast, ToastPosition } from "@backpackapp-io/react-native-toast";
import { Image, Text, View } from "react-native";
import { styles } from "./Toast.styles";
import { ButtonAction } from "components/ButtonAction/ButtonAction";

export const successToast = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return toast("", {
    position: ToastPosition.BOTTOM,
    disableShadow: true,
    duration: 5000,
    customToast: ({ width }) => {
      return (
        <View style={[styles.container, { width }]}>
          <ButtonAction
            style={styles.close}
            type="cross"
            onPress={() => toast.dismiss()}
          />
          <Image
            style={styles.image}
            source={require("assets/images/i120_mercoin.png")}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      );
    },
  });
};
