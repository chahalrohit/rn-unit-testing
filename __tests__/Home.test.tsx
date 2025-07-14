import { cleanup, render, screen } from "@testing-library/react-native";
import React from "react";
import HomeScreen from "../app/(tabs)/home";
import AppImage from "../components/AppImage";

afterEach(cleanup);

// Mock the image module and the logo.png
jest.mock("@assets/images", () => ({
  __esModule: true, // 👈 necessary for default export mocking
  default: {
    logo: 1, // 👈 this matches your usage: Images['logo']
  },
}));

describe("HomeScreen", () => {
  // 👈 This is Jest
  it("shows welcome message", () => {
    // 👈 Jest test case
    render(<HomeScreen />); // 👈 render from TLRN
    const text = screen.getByText("Welcome To Expo!"); // 👈 screen is from TLRN
    expect(text).toBeTruthy(); // 👈 expect is from Jest
  });
  it("shows message", () => {
    render(<HomeScreen />);
    const text = screen.getByText(
      "This app demostrate latest features of expo"
    );
    expect(text).toBeTruthy();
  });
  it("renders logo with correct props", () => {
    const { getByTestId } = render(
      <AppImage
        sourceKey="logo"
        height={100}
        width={200}
        testID="app-logo"
        accessibilityLabel="App Logo"
      />
    );

    const image = getByTestId("app-logo");
    expect(image.props.source).toBe(1);
    expect(image.props.style).toEqual([{ height: 100, width: 200 }]);
    expect(image.props.accessibilityLabel).toBe("App Logo");
  });
});
