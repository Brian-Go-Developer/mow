import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { global } from "../../styles/global";

const Home = (props) => {

  return (
    <View style={global.container} {...props}>
      <StatusBar />
      <Text>Home</Text>
    </View>
  );
};
export default Home;
