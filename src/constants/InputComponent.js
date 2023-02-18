import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Colors } from "./Colors";
export default function InputComponent({ text, dummy, entry }) {
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
    <>
      {loaded ? <Text style={styles.text}>{text}</Text> : ""}
      <TextInput
        placeholder={dummy}
        style={styles.input}
        secureTextEntry={entry}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "CircularStd",
    fontSize: 12,
    color: Colors.grey,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 50,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,

    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
});
