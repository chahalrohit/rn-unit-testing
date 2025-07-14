module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!expo|@react-native|react-native|react-native-vector-icons|expo-.*)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@assets/images$": "<rootDir>/assets/images/index.ts", // or index.ts
  },
};
