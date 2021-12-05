import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  Keyboard,
} from "react-native";

const MapView = () => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          width: windowWidth,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <Text>Map goes here</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MapView;
