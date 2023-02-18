import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Colors } from "./Colors";
export default function BlackText16({ text }) {
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return <View>{loaded ? <Text style={styles.text}>{text}</Text> : ""}</View>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "CircularStd",

    fontSize: 16,
  },
});
