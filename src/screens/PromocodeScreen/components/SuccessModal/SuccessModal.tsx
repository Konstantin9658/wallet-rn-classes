import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ButtonAction } from "components/ButtonAction/ButtonAction";
import { Image, Text } from "react-native";
import { styles } from "./SuccessModal.styles";
import { forwardRef, useCallback, useRef } from "react";
import { Button } from "components/Button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMergeRefs } from "hooks/useMergeRefs";
interface SuccessModalProps {
  reward: number;
}

export const SuccessModal = forwardRef<BottomSheetModal, SuccessModalProps>(
  (props, ref) => {
    const { reward, ...rest } = props;

    const localRef = useRef<BottomSheetModal | null>(null);

    const mergedRefs = useMergeRefs<BottomSheetModal>(localRef, ref);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} opacity={0.7} disappearsOnIndex={-1} />
      ),
      [],
    );

    const handleClose = () => localRef.current?.close();

    const { bottom: insetBottom } = useSafeAreaInsets();

    return (
      <BottomSheetModal
        {...rest}
        ref={mergedRefs}
        handleStyle={styles.handleContainer}
        handleIndicatorStyle={styles.handleIndicator}
        enableDynamicSizing
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        enableHandlePanningGesture>
        <ButtonAction type="cross" style={styles.close} onPress={handleClose} />
        <BottomSheetView
          style={[styles.container, { paddingBottom: insetBottom + 24 }]}>
          <Image
            style={styles.image}
            source={require("assets/images/i120_mercoin.png")}
          />
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.description}>
            You’ve earned {reward} mercoins.
          </Text>
          <Button label="Horray!" onPress={handleClose} />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
