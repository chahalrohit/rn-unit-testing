import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { typography } from '../../../../theme';
import constants from '../../../../core/constants/constants';

export default StyleSheet.create({
  container: {
    marginTop: scale(20),
  },
  button: {
    backgroundColor: colors.primaryColor,
    height: verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: constants.borderRadius2,
  },
  buttonText: {
    fontFamily: typography.fontFamily.semiBold,
    color: colors.whiteColor,
    fontSize: typography.fontSize.lg,
    includeFontPadding: false, // Android only to fix text not centered in button issue
    textAlignVertical: 'center', // Android only to fix text not centered in button issue
  },

  disabledButton: {
    backgroundColor: '#aaa',
  },
});
