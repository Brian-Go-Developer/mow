import React, { useState } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Dimensions } from "react-native";
import TruckListView from "../../components/truck-list-view";
import MapView from "../../components/map-view";

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
  const [sliderUp, setSliderUp] = useState(false);

  const handleSliderUp = (gestureState) => {
    if (gestureState.vy * 1000000 < 0) {
      setSliderUp(true);
    }
  };

  const handleSliderDown = (gestureState) => {
    if (gestureState.vy * 1000000 > 0) {
      setSliderUp(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView slider={sliderUp} />
      <SlidingUpPanel
        draggableRange={draggableRange}
        backdropOpacity={0}
        onDragStart={(value, gestureState) => handleSliderUp(gestureState)}
        onDragEnd={(value, gestureState) => handleSliderDown(gestureState)}
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
