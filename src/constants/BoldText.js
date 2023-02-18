import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
export default function BoldText({ text }) {
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      "CircularStd-Bold": require("../../assets/CircularStd-Bold.otf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return (
    <View style={styles.container}>
      {loaded ? <Text style={styles.bold}>{text}</Text> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: "CircularStd-Bold",
    fontSize: 30,
  },

  container: {
    marginTop: -50,
  },
});
