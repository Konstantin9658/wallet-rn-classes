import React from "react";
import { styles } from "./ScreenContainer.styles";
import { commonStyles } from "common/styles";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ScreenContainerProps } from "./ScreenContainer.types";

export const ScreenContainer = (props: ScreenContainerProps) => {
  const {
    children,
    title,
    description,
    imageSrc,
    ButtonComponent,
    BottomSheetComponent,
  } = props;
  return (
    <>
      <KeyboardAvoidingView
        contentContainerStyle={commonStyles.flex}
        style={commonStyles.flex}
        behavior={Platform.OS === "ios" ? "position" : "height"}>
        <ScrollView style={commonStyles.flex}>
          <View style={styles.container}>
            <Image style={styles.image} source={imageSrc} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.inputContainer}>{children}</View>
            {ButtonComponent}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {BottomSheetComponent ? BottomSheetComponent : null}
    </>
  );
};
