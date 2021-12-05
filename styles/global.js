import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  containerNoCenter: {
    flex: 2,
    paddingHorizontal: 24,
    justifyContent: "flex-start",
  },
  containerGrayscaleNoCenter: {
    height: "100%",
    backgroundColor: "#EAEAEA",
  },
  containerHorizontalCenter: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 15,
  },
});
