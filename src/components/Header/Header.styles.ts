import { Colors } from 'constants/Colors';
import { FontFamilies } from 'constants/Fonts';
import { FontSize, LineHeight } from 'constants/Typography';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 60,
    width: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white100,
    flexDirection: 'row',
    shadowColor: Colors.black100,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.06,
  },
  logo: {
    width: 100,
    height: 24,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontFamily: FontFamilies.INTER.medium,
    fontWeight: 700,
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
    marginRight: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.dark40,
    borderRadius: 10,
    marginLeft: 12,
  },
});
