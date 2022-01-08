import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

const TruckItem = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const TruckListView = ({ truckData }) => {
  const renderItem = ({ item }) => <TruckItem name={item.name} />;

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          width: 50,
          backgroundColor: "#ddd",
          height: 4,
          borderRadius: 2,
          marginBottom: 20
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
          paddingBottom: 25
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 14 }}>24</Text>
        <Text style={{ fontWeight: "600" }}> trucks near you</Text>
      </View>
      <FlatList
        data={truckData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={{ width: "95%", marginTop: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#dddddd",
    color: "black",
    padding: 20,
    marginVertical: 8
  },
  name: {
    fontSize: 28,
    color: "black"
  }
});

export default TruckListView;
