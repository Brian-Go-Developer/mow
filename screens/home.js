import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { global } from "../styles/global";

const Home = () => {
  return (
    <View style={global.container}>
      <StatusBar />
      <Text>Home</Text>
    </View>
  );
};
export default Home;
