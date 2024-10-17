import IconChevronRight from "assets/icons/chevron-right.svg";
import { View, Pressable, Text } from "react-native";
import { ServicesItemProps } from "./Services.types";
import { styles } from "./Services.styles";
import LogoStore from "./images/store.svg";
import LogoWiki from "./images/wiki.svg";

const ServicesItem = (props: ServicesItemProps) => {
  const { title, description, Logo } = props;
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.item_pressed]}>
      <View style={styles.itemContainer}>
        <Logo style={styles.itemLogo} />
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
        </View>
      </View>
      <IconChevronRight />
    </Pressable>
  );
};

export const Services = () => {
  return (
    <View>
      <ServicesItem
        title="Store"
        description="Branded items for employees"
        Logo={LogoStore}
      />
      <ServicesItem
        title="Wiki"
        description="Knowledge about us"
        Logo={LogoWiki}
      />
    </View>
  );
};
