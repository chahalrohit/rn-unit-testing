import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Provider } from "react-redux";
import { store } from "../../store";

import { Tabs } from "expo-router/tabs";
import React from "react";

export default function TabLayout() {
  return (
    <Provider store={store}>
      <Tabs initialRouteName="home/index">
        <Tabs.Screen
          name="home/index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="post/index"
          options={{
            title: "Post",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="post" size={size} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="get/index"
          options={{
            title: "Get",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="get-app" size={size} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="put/index"
          options={{
            title: "Put",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="edit" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
