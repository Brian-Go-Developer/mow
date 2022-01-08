import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Keyboard,
  Pressable,
  TextInput,
  Text
} from "react-native";
import Map, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

const MapView = ({ slider, truckData }) => {
  const windowWidth = Dimensions.get("window").width;
  const [showReloadButton, setShowReloadButton] = useState(false);
  const [sliderInterruptedReload, setSliderInterruptedReload] = useState(false);
  const [location, setLocation] = useState(null);
  const [load, setLoad] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  const handleMapMove = (e) => {
    if (load > 3) {
      setLoad(load + 1);
      return;
    }
    setShowReloadButton(true);
  };

  useEffect(() => {
    if (slider) {
      if (showReloadButton) {
        setShowReloadButton(false);
        setSliderInterruptedReload(true);
      }
    } else {
      if (sliderInterruptedReload) {
        setSliderInterruptedReload(false);
        setShowReloadButton(true);
      }
    }
  }, [slider]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          width: windowWidth,
          position: "relative",
          top: 0,
          height: 220,
          justifyContent: "flex-end",
          padding: 15,
          zIndex: 25,
          shadowColor: "#555",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 1
        }}
      >
        {showReloadButton && (
          <Pressable
            style={{ position: "absolute", top: 235 }}
            onPressIn={() => setShowReloadButton(false)}
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
                elevation: 1
              }}
            >
              <Ionicons
                name="reload"
                size={18}
                color="#000"
                style={{ marginRight: 6 }}
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
            borderRadius: 20
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
              textAlign: "center"
            }}
          />
        </View>
      </View>
      {location && (
        <View
          style={{
            width: windowWidth,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ddd"
          }}
        >
          <Map
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.102,
              longitudeDelta: 0.0421
            }}
            onRegionChange={handleMapMove}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            style={{ width: "100%", height: "100%" }}
            onPress={() => Keyboard.dismiss()}
          >
            <Marker coordinate={location.coords} />
            {truckData.map((truck, index) => (
              <Marker key={index} coordinate={truck.latlng} />
            ))}
          </Map>
        </View>
      )}
    </>
  );
};

const mapStyle = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede"
      },
      {
        lightness: 21
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#ffffff"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#333333"
      },
      {
        lightness: 40
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  }
];

export default MapView;
