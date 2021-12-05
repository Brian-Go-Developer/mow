import React, { useEffect, useRef } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Dimensions } from "react-native";
import SearchHeader from "../components/search-header";
import TruckListView from "../components/truck-list-view";
import MapView from "../components/map-view";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 10,
  },
};

const Home = () => {
  const windowHeight = Dimensions.get("window").height;
  const draggableRange = {
    top: windowHeight * 0.9,
    bottom: 75,
  };
  const panelRef = useRef();

  useEffect(() => {
    panelRef.current.show({
      toValue: 150,
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchHeader />
      <MapView />
      <SlidingUpPanel
        draggableRange={draggableRange}
        backdropOpacity={0}
        ref={panelRef}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.panel}>
            <TruckListView />
          </View>
        </TouchableWithoutFeedback>
      </SlidingUpPanel>
    </View>
  );
};

export default Home;
