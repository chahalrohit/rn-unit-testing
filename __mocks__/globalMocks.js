// jest.setup.js or globalMocks.js
jest.mock("../assets/images/logo.png", () => {
  return "mocked-image";
});
