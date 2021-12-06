import React from "react";
import { View, Text } from "react-native";
import { global } from "../../styles/global";

const Profile = (props) => {
  return (
    <View style={global.container} {...props}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
