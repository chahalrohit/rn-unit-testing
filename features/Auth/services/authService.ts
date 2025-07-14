import api from '../../../core/api/axiosInstance';

interface LoginCredentials {
  email: string;
  password: string;
}

export const loginUser = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post('/api/login', credentials, {});
    return response.data;
  } catch (error: any) {
    console.error('Login error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw error;
  }
};
