import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Screen() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
