import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
export default function AppButton({ title, page }) {
  const navigation = useNavigation();
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
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(page)}
    >
      {loaded ? <Text style={styles.text}>{title}</Text> : ""}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
    height: 50,
  },
  text: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: "white",
  },
});
