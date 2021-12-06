import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { global } from "../../styles/global";
<<<<<<< HEAD
=======
const Home = (props) => {

  return (
    <View style={global.container} {...props}>
      <StatusBar />
>>>>>>> b9e8e2ea18bc43011abe8ebef542a169059a351a

const Home = (props) => {

  return (
    <View style={global.container} {...props}>
      <StatusBar />
      <Text>Home</Text>
    </View>
  );
};
export default Home;
