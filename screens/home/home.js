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

const truckData = [
  {
    name: "Trevor's Tacos",
    latlng: { latitude: 32.46138, longitude: -86.47214 },
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  },
  {
    name: "Knight's Knachos",
    latlng: { latitude: 32.43138, longitude: -86.48914 },
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  },
  {
    name: "Go's Grilled Cheese",
    latlng: { latitude: 32.48138, longitude: -86.40214 },
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
  },
  {
    name: "Mike's Pizza",
    latlng: { latitude: 32.59138, longitude: -86.49214 },
    id: "58694a0f-3da1-471f-bd96-145571ea27e1",
  },
  {
    name: "Jeff's Sandwiches",
    latlng: { latitude: 32.36138, longitude: -86.31214 },
    id: "58694a0f-3da1-2a6e-bd96-145571e29d72",
  },
  {
    name: "Jimmy's Wings",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58694a0f-1421-471f-bd96-145571e29d72",
  },
  {
    name: "Dwight's Beets",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58694a0f-1421-471f-bd96-14557ae29d72",
  },
  {
    name: "Literally Anything",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58694a0f-1421-471f-bd96-165571e29d72",
  },
  {
    name: "Literally Anything",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58694a0f-1424-471f-bd96-165571e29d72",
  },
  {
    name: "Literally Anything",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58694a4f-1424-471f-bd96-165571e29d72",
  },
  {
    name: "Literally Anything",
    latlng: { latitude: 32.33138, longitude: -86.32214 },
    id: "58692a4f-1424-471f-bd96-165571e29d72",
  },
];

const Home = () => {
  const windowHeight = Dimensions.get("window").height;
  const draggableRange = {
    top: windowHeight * 0.87,
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
      <MapView slider={sliderUp} truckData={truckData} />
      <SlidingUpPanel
        draggableRange={draggableRange}
        backdropOpacity={0}
        onDragStart={(value, gestureState) => handleSliderUp(gestureState)}
        onDragEnd={(value, gestureState) => handleSliderDown(gestureState)}
      >
        <View style={styles.panel}>
          <TruckListView truckData={truckData} />
        </View>
      </SlidingUpPanel>
    </View>
  );
};

export default Home;
