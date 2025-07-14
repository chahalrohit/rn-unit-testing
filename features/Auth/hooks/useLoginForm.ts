import { useState } from 'react';
import { loginUser } from '../services/authService';

export const useLoginForm = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (field: string, value: string) => {
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await loginUser({ email, password });
      console.log('Login Success:', response);
    } catch (error) {
      console.error('Login Failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { email, password, isSubmitting, onChange, onSubmit };
};
