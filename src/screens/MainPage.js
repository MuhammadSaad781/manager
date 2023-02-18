import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../constants/Screen";
import MunsAppLogo from "../svgs/MunsAppLogo";
import AppTextBold from "../constants/AppTextBold";
import AppText from "../constants/AppText";
import AppButton from "./AppButton";
import { useNavigation } from "@react-navigation/native";

export default function MainPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <MunsAppLogo />

      <View style={styles.image}>
        <Image
          source={require("../../assets/Frame.png")}
          style={styles.frame}
        />
      </View>
      <AppTextBold text="Welcome to" text2="MunsApp!" />
      <View style={styles.description}>
        <AppText
          text="Muns provides professional door pick up trash"
          text2=" valet services to apartment complexes"
        />
      </View>
      <View style={styles.button}>
        <AppButton title="Get Started" page={"SignIn"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frame: {
    width: "100%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: 30,
  },

  description: {
    marginTop: 10,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 40,
    display: "flex",
    width: "100%",
    height: 100,
  },
});
