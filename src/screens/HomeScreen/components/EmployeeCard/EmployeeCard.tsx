import { ProfileSearchResponse } from "api/backend/index.schemas";
import { Pressable, Image, View, Text } from "react-native";
import { styles } from "./EmployeeCard.styles";

export const EmployeeCard = ({
  employee,
  onPress,
}: {
  employee: ProfileSearchResponse;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      {employee.picture ? (
        <Image style={styles.avatar} source={{ uri: employee.picture }} />
      ) : null}
      <View>
        <Text style={styles.name}>
          {employee.firstName} {employee.lastName}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.email}>
          {employee.email}
        </Text>
      </View>
    </Pressable>
  );
};
