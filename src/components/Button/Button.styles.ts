import {Colors} from 'constants/Colors';
import {FontFamilies} from 'constants/Fonts';
import {FontSize, LineHeight} from 'constants/Typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary100,
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 12,
    shadowColor: Colors.primary100,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  button_pressed: {
    opacity: 0.7,
  },
  button_disabled: {
    opacity: 0.4,
    shadowOpacity: 0,
  },
  text: {
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    color: Colors.white100,
    fontFamily: FontFamilies.INTER.medium,
  },
});
