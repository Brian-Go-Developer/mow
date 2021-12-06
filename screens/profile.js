import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HorizontalRule } from "../components/index";

const HeaderSection = () => {
  return (
    <View
      style={{
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
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#000",
          marginLeft: 30,
          marginRight: 15,
        }}
      />
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          First Name
        </Text>
        <TouchableOpacity
          onPress={() => alert("Edit profile touchable")}
          underlayColor="white"
        >
          <Text
            style={{ fontSize: 10, fontWeight: "normal", color: "#888888" }}
          >
            Edit profile picture
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProfileMainSection = () => {
  return (
    <>
      <View
        style={{
          paddingVertical: 20,
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#616161",
            marginVertical: 7,
          }}
        >
          Own a food truck? List it on BiteWagon
        </Text>
        <TouchableOpacity
          onPress={() => alert("Learn more touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "normal",
              color: "#7B7B7B",
              marginBottom: 10,
            }}
          >
            Learn more {">"}
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1.2}
          width={"100%"}
          opacity={0.8}
        />
      </View>
      <View
        style={{
          paddingBottom: 30,
          paddingHorizontal: 24,
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "normal",
            color: "#7B7B7B",
            marginBottom: 10,
          }}
        >
          Account settings
        </Text>
        <TouchableOpacity
          onPress={() => alert("Personal information touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            Personal information
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
        <TouchableOpacity
          onPress={() => alert("Notifications touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            Notifications
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
      </View>
      <View
        style={{
          paddingBottom: 30,
          paddingHorizontal: 24,
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "normal",
            color: "#7B7B7B",
            marginBottom: 10,
          }}
        >
          Support
        </Text>
        <TouchableOpacity
          onPress={() => alert("How it works touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            How BiteWagon works
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
        <TouchableOpacity
          onPress={() => alert("Give us feedback touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            Give us feedback
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
      </View>
      <View
        style={{
          paddingBottom: 30,
          paddingHorizontal: 24,
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "normal",
            color: "#7B7B7B",
            marginBottom: 10,
          }}
        >
          Legal
        </Text>
        <TouchableOpacity
          onPress={() => alert("Terms of service touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            Terms of service
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
      </View>
      <View
        style={{
          paddingBottom: 30,
          paddingHorizontal: 24,
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity
          onPress={() => alert("Logout touchable")}
          underlayColor="white"
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#616161",
              marginVertical: 10,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <HorizontalRule
          color={"#7B7B7B"}
          height={1}
          width={"100%"}
          opacity={0.3}
        />
      </View>
    </>
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#EAEAEA" }}>
      <HeaderSection />
      <ProfileMainSection />
    </SafeAreaView>
  );
};

const makeIconRender = (name) => {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={30} />
  );
};

export default Profile;
