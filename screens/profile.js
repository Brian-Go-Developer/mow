import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.icon} />
        <View>
          <Text style={styles.topContainerNameText}>First Name</Text>
          <Text style={styles.topContainerEditProfilePictureText}>
            Edit profile picture
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#E0E0E0",
  },
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
    marginLeft: 25,
    marginRight: 15,
  },
});

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};

export default Profile;
