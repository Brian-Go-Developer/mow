import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import React from "react";
import SplashIcon from '../../assets/splash.png';

const OnboardingScreen = ({ navigation }) => {
  const completeOnboarding = async () => {
    AsyncStorage.setItem("onboarded", "true")
      .then(() => {
        navigation.replace("app");
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
