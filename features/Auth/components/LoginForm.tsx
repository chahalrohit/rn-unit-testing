import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import LoginButton from './LoginButton/LoginButton';
import Input from '../../../presentation/components/Inputs/Input';

interface Props {
  email: string;
  password: string;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const LoginForm: React.FC<Props> = ({
  email,
  password,
  onChange,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <>
      <Input
        label="Email"
        value={email}
        onChangeText={text => onChange('email', text)}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={text => onChange('password', text)}
        placeholder="Enter your password"
      />
      <LoginButton isSubmitting={isSubmitting} onPress={onSubmit} />
    </>
  );
};

export default LoginForm;
