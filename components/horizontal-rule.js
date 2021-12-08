import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

const HorizontalRule = ({ color, height, width, opacity }) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: height,
        width: width,
        opacity: opacity,
      }}
    />
  );
};

HorizontalRule.proptypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.string,
  opacity: PropTypes.number,
};

HorizontalRule.defaultProps = {
  color: "#000",
  height: 1,
  width: "100%",
  opacity: 1,
};
export default HorizontalRule;
