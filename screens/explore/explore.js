import React from "react";
import { View, Text } from "react-native";
import { global } from "../../styles/global";

const Explore = (props) => {
  return (
    <View style={global.container} {...props}>
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;
