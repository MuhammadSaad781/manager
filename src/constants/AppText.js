import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Colors } from "./Colors";
export default function AppText({ text, text2 }) {
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
  return (
    <View style={styles.container}>
      {loaded ? <Text style={styles.text1}>{text}</Text> : ""}
      {loaded ? <Text style={styles.text1}>{text2}</Text> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontFamily: "CircularStd",
    fontSize: 16,
    alignSelf: "center",
    color: Colors.grey,
  },
});
