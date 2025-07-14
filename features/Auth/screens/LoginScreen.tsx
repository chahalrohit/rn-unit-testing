import React from 'react';
import { Image, Text, View } from 'react-native';
import LoginForm from '../components/LoginForm';
import { useLoginForm } from '../hooks/useLoginForm';
import { colors } from '../../../theme';
import { scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import Images from '../../../assets/images';
import constants from '../../../core/constants/constants';

const LoginScreen: React.FC = () => {
  const { email, password, isSubmitting, onChange, onSubmit } = useLoginForm();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.whiteColor,
        paddingHorizontal: scale(20),
      }}
      edges={['top']} // Only apply safe padding to top
    >
      <View style={{ marginTop: scale(40) }} />
      <FastImage
        source={Images.logo}
        style={{
          height: scale(100),
          width: scale(100),
          alignSelf: 'center',
          borderRadius: scale(constants.borderRadius3),
          marginBottom: verticalScale(40),
        }}
      />
      <LoginForm
        email={email}
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
