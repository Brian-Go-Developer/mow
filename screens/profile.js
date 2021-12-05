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
    <>
      <View style={global.containerHorizontalCenter}>
        <Text style={mainStyles.largeGrayscaleText}>
          Own a food truck? List it on BiteWagon
        </Text>
        <Text style={mainStyles.smallGrayscaleText}>Learn more {">"}</Text>
        <View style={mainStyles.horizontalRule} />
      </View>
      <View style={global.containerNoCenter}>
        <Text style={mainStyles.smallGrayscaleText}>Account settings</Text>
        <Text style={mainStyles.mediumGrayscaleText}>Personal Information</Text>
        <View style={mainStyles.horizontalRule} />
        <Text style={mainStyles.mediumGrayscaleText}>Notifications</Text>
        <View style={mainStyles.horizontalRule} />
      </View>
      <View style={global.containerNoCenter}>
        <Text style={mainStyles.smallGrayscaleText}>Support</Text>
        <Text style={mainStyles.mediumGrayscaleText}>How BiteWagon Works</Text>
        <View style={mainStyles.horizontalRule} />
        <Text style={mainStyles.mediumGrayscaleText}>Give us feedback</Text>
        <View style={mainStyles.horizontalRule} />
      </View>
      <View style={global.containerNoCenter}>
        <Text style={mainStyles.smallGrayscaleText}>Legal</Text>
        <Text style={mainStyles.mediumGrayscaleText}>Terms of service</Text>
        <View style={mainStyles.horizontalRule} />
        <Text style={mainStyles.mediumGrayscaleTextBold}>Logout</Text>
        <View style={mainStyles.horizontalRule} />
      </View>
    </>
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

const mainStyles = StyleSheet.create({
  largeGrayscaleText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#616161",
    marginVertical: 7,
  },
  mediumGrayscaleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#616161",
    marginVertical: 10,
  },
  mediumGrayscaleTextBold: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#616161",
    marginVertical: 10,
  },
  smallGrayscaleText: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#7B7B7B",
    marginBottom: 10,
  },
  horizontalRule: {
    borderBottomColor: "#7B7B7B",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
});

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};

export default Profile;
