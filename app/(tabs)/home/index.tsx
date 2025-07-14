import AppImage from "@/components/AppImage";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get("screen");

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome To Expo!</Text>
      <Text>This app demostrate latest features of expo</Text>
      <AppImage
        sourceKey="logo"
        height={height}
        width={width}
        testID="app-logo"
        accessibilityLabel="App Logo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CounterScreen;
