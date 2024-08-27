import {Colors} from 'constants/Colors';
import {FontFamilies} from 'constants/Fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    borderColor: Colors.neutral40,
    backgroundColor: Colors.neutral20,
    color: Colors.dark80,
    fontFamily: FontFamilies.INTER.regular,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  input_focus: {
    borderColor: Colors.primary100,
  },
  input_error: {
    borderColor: Colors.red,
  },
});
