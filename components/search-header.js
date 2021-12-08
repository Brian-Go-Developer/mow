import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchHeader = ({ showReloadButton, reloadButtonPressed }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          backgroundColor: "#fff",
          width: windowWidth,
          position: "relative",
          top: 0,
          height: 210,
          justifyContent: "flex-end",
          padding: 15,
          zIndex: 25,
        }}
      >
        {showReloadButton && (
          <Pressable
            style={{ position: "absolute", top: 225 }}
            onPressIn={reloadButtonPressed}
          >
            <View
              style={{
                width: 170,
                left: windowWidth / 2 - 85,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: 7,
                borderRadius: 18,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 1,
              }}
            >
              <Ionicons
                name="reload"
                size={20}
                color="#000"
                style={{ marginRight: 5 }}
              />
              <Text>Search this area</Text>
            </View>
          </Pressable>
        )}
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
