import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { global } from "../styles/global";

const HeaderSection = () => {
  return (
    <View style={headerStyles.top}>
      <View style={headerStyles.icon} />
      <View>
        <Text style={headerStyles.topContainerNameText}>First Name</Text>
        <Text style={headerStyles.topContainerEditProfilePictureText}>
          Edit profile picture
        </Text>
      </View>
    </View>
  );
};

const ProfileMainSection = () => {
  return (
    <View style={global.container}>
      <Text>Own a food truck? List it on Biteswagen</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={global.containerGrayscaleNoCenter}>
      <HeaderSection />
      <ProfileMainSection />
    </SafeAreaView>
  );
};

const headerStyles = StyleSheet.create({
  top: {
    height: "18%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topContainerNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  topContainerEditProfilePictureText: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#888888",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#000",
    marginLeft: 30,
    marginRight: 15,
  },
});

const mainStyles = StyleSheet.create({});

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};

export default Profile;
