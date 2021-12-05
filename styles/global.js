import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  containerGrayscaleNoCenter: {
    height: "100%",
    backgroundColor: "#EAEAEA",
  },
});
