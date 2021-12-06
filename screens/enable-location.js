import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";

const EnableLocation = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    } else {
      let location = await Location.getCurrentPositionAsync({});
      navigation.navigate("app", { location });
    }
  };

  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          height: windowHeight,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 45,
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Please enable location services to find food trucks near you
        </Text>
        <Button onPress={getLocation} title="Enable location" />
      </View>
    </>
  );
};

export default EnableLocation;
