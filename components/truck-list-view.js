import React from "react";
import { View, Text } from "react-native";

const TruckListView = () => {
  return (
    <>
      <View
        style={{
          width: 50,
          backgroundColor: "#ddd",
          height: 4,
          borderRadius: 2,
          marginBottom: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          borderBottomColor: "#eee",
          width: "95%",
          borderBottomWidth: 2,
          paddingBottom: 25,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 14 }}>24</Text>
        <Text style={{ fontWeight: "600" }}> trucks near you</Text>
      </View>
    </>
  );
};

export default TruckListView;
