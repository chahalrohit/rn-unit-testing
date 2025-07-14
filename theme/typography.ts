import { scale } from 'react-native-size-matters';

const typography = {
  fontFamily: {
    extraLight: 'Poppins-ExtraLight',
    light: 'Poppins-Light',
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
    extraBold: 'Poppins-ExtraBold',
  },
  fontSize: {
    xs: scale(10),
    sm: scale(12),
    md: scale(14),
    lg: scale(16),
    xl: scale(22),
    xxl: scale(30),
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
};

export default typography;
