// // src/services/authService.ts

// import api from '../core/api/axiosInstance';

// interface LoginCredentials {
//   email: string;
//   password: string;
// }

// interface RegisterPayload {
//   name: string;
//   email: string;
//   password: string;
// }

// // 🔐 Login User
// export const loginUser = async (credentials: LoginCredentials) => {
//   return api.post('/auth/login', credentials);
// };

// // 📝 Register User
// export const registerUser = async (data: RegisterPayload) => {
//   return api.post('/auth/register', data);
// };

// // 🚪 Logout User
// export const logoutUser = async () => {
//   return api.post('/auth/logout');
// };
