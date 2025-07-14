// // src/services/userService.ts

// import api from '../core/api/axiosInstance';

// interface UpdateProfilePayload {
//   name?: string;
//   email?: string;
//   phone?: string;
// }

// // 👤 Get User Profile
// export const getUserProfile = async (userId: string) => {
//   return api.get(`/users/${userId}`);
// };

// // ✏️ Update User Profile
// export const updateUserProfile = async (userId: string, data: UpdateProfilePayload) => {
//   return api.put(`/users/${userId}`, data);
// };

// // ❌ Delete User
// export const deleteUser = async (userId: string) => {
//   return api.delete(`/users/${userId}`);
// };
