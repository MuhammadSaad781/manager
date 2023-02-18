import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MunsAppLogo from "../svgs/MunsAppLogo";
import GreyLine from "../constants/GreyLine";
import AppTextBold from "../constants/AppTextBold";
import BoldText from "../constants/BoldText";
import AppText from "../constants/AppText";
import Text14 from "../constants/Text14";
import InputComponent from "../constants/InputComponent";
import AppButton from "./AppButton";

export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <MunsAppLogo />
      <GreyLine />
      <View style={styles.text1}>
        <BoldText text="Sign In" />
        <View style={{ marginTop: 5, height: 40 }}>
          <Text14 text="Please sign-in to your account!" />
        </View>
      </View>
      <View style={styles.inputs}>
        <InputComponent text="Username" dummy="John Doe" />

        <View style={{ marginTop: 20 }}>
          <InputComponent text="Password" dummy="Password" entry={true} />
        </View>
        <View style={styles.margin}>
          <AppButton title="Sign In" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    marginTop: 70,
    width: "95%",
    alignSelf: "center",
  },
  inputs: {
    width: "95%",
    alignSelf: "center",
    marginTop: 40,
  },
  margin: {
    marginTop: 50,
  },
});
