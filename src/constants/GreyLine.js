import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "./Colors";

export default function GreyLine() {
  return <View style={styles.greyline}></View>;
}

const styles = StyleSheet.create({
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.line,
    marginTop: 30,
  },
});
