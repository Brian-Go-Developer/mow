import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home, Profile, Explore, Onboarding } from "./screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isOnboarded, setIsOnboarded] = React.useState(false);
  useEffect(() => {
    AsyncStorage.getItem("onboarded")
      .then((val) => {
        if (val === "true") {
          setIsOnboarded(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TabNavigator = () => {
    return (
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
    );
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isOnboarded && (
            <Stack.Screen
              name="onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="app"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};
