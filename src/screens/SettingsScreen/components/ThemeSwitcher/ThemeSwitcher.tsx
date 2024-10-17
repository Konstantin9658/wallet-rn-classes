import { Pressable, Text, TextStyle, View } from "react-native";
import { styles } from "./ThemeSwitcher.styles";
import IconSun from "assets/icons/sun.svg";
import IconMoon from "assets/icons/moon.svg";
import IconAutoChange from "assets/icons/autochange.svg";
import IconCheckmark from "assets/icons/checkmark.svg";
import { useTheme } from "services/theme";
import { SvgProps } from "react-native-svg";
import { ThemeVariant } from "api/backend/index.schemas";

const themes = [
  {
    Icon: IconSun,
    label: "Light" as ThemeVariant,
  },
  { Icon: IconMoon, label: "Dark" as ThemeVariant },
  { Icon: IconAutoChange, label: "Auto" as ThemeVariant },
];

const ThemeItem = ({
  Icon,
  isActive,
  label,
}: {
  Icon: React.FC<SvgProps>;
  isActive: boolean;
  label: ThemeVariant;
}) => {
  const [_, setTheme] = useTheme();
  return (
    <Pressable
      onPress={() => setTheme({ theme: label })}
      style={({ pressed }) => [styles.item, pressed && styles.item_pressed]}>
      <View style={styles.itemContent}>
        <Icon
          style={[styles.icon, isActive && styles.icon_active] as TextStyle}
        />
        <Text style={[styles.label, isActive && styles.label_active]}>
          {label} {label === "Auto" ? "change" : "theme"}
        </Text>
      </View>
      {isActive ? <IconCheckmark /> : null}
    </Pressable>
  );
};

export const ThemeSwitcher = () => {
  const [state] = useTheme();

  return themes.map(({ Icon, label }, i) => (
    <ThemeItem
      key={`item-${label}-${i}`}
      Icon={Icon}
      label={label}
      isActive={state?.theme === label}
    />
  ));
};
