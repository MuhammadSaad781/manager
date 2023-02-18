import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BlackText16 from "./BlackText16";
import GreyLine from "./GreyLine";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function NavBar({ title, icon, page }) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate(page)}
      >
        <Ionicons
          style={{ position: "absolute", marginLeft: 10 }}
          name={icon}
          size={24}
          color="black"
          onPress={() => navigation.navigate("TabNavigator")}
        />
        <View style={{ alignSelf: "center" }}>
          <BlackText16 text={title} />
        </View>
      </TouchableOpacity>
      <GreyLine />
    </>
  );
}

const styles = StyleSheet.create({
  nav: {
    marginTop: 50,
    display: "flex",

    width: "100%",
  },
});
