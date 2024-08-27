import {Colors} from 'constants/Colors';
import {FontFamilies} from 'constants/Fonts';
import {FontSize, LineHeight} from 'constants/Typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    bottom: -17,
    fontSize: FontSize.fs13,
    lineHeight: LineHeight.lh20,
    fontFamily: FontFamilies.INTER.regular,
  },
  text_error: {
    color: Colors.red,
  },
  text_hint: {
    color: Colors.dark80,
  },
});
