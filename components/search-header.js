import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchHeader = () => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          backgroundColor: "#fff",
          width: windowWidth,
          position: "absolute",
          top: 0,
          height: 120,
          justifyContent: "flex-end",
          padding: 15,
          zIndex: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f6f6f6",
            height: 40,
            borderRadius: 20,
          }}
        >
          <Ionicons
            name="ios-search"
            size={22}
            color={"#777"}
            style={{ paddingRight: 8 }}
          />
          <TextInput
            placeholder="What are you hungry for?"
            style={{
              height: "100%",
              color: "#000",
              textAlign: "center",
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchHeader;
