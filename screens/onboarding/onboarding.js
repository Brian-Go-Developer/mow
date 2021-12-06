import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import React from "react";
<<<<<<< HEAD
import * as Location from "expo-location";
=======
>>>>>>> b9e8e2ea18bc43011abe8ebef542a169059a351a
import SplashIcon from '../../assets/splash.png';

const OnboardingScreen = ({ navigation }) => {
  const completeOnboarding = async () => {
    const permission = await Location.hasServicesEnabledAsync();
    AsyncStorage.setItem("onboarded", "true")
      .then(() => {
        permission
          ? navigation.navigate("app")
          : navigation.replace("location");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Onboarding
      onSkip={completeOnboarding}
      onDone={completeOnboarding}
      pages={[
        {
          backgroundColor: "#fff",
          title: "Onboarding",
          image: <Image source={SplashIcon} />,
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#aaa",
          title: "Onboarding 2",
          image: <Image source={SplashIcon} />,
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
