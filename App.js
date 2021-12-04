import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, Profile, Explore } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 90,
            },
            tabBarActiveTintColor: "#000000",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: makeIconRender("home"),
              tabBarLabelStyle: { marginTop: -10, marginBottom: 5 },
            }}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              tabBarIcon: makeIconRender("food"),
              tabBarBadge: 2,
              tabBarBadgeStyle: { backgroundColor: "red", left: 10 },
              tabBarLabelStyle: { marginTop: -10, marginBottom: 5 },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: makeIconRender("account"),
              tabBarLabelStyle: { marginTop: -10, marginBottom: 5 },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};
