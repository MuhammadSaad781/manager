import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SettingComponent from "../constants/SettingComponent";
import NavBar from "../constants/NavBar";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import BlackText14 from "../constants/BlackText14";
import { useNavigation } from "@react-navigation/native";
export default function Settings() {
  const navigation = useNavigation();
  return (
    <View>
      <NavBar title={"Settings"} />
      <View style={styles.box}>
        <SettingComponent
          text={"Notifications"}
          icon={"notifications-outline"}
          page={"TabNavigator"}
        />
        <SettingComponent
          text={"Write to Us"}
          materialicon={"file-edit-outline"}
          page={"WriteToUs"}
        />
        <SettingComponent
          text={"Terms & Conditions"}
          fonticon={"file-text-o"}
          page={"TermsConditions"}
        />
        <SettingComponent
          text={"Privacy Policy"}
          materialicon={"file-lock-outline"}
          page={"PrivacyPolicy"}
        />
        <SettingComponent
          text={"About Us"}
          anticon={"exclamationcircleo"}
          page={"AboutUs"}
        />
        <TouchableOpacity
          style={styles.box2}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Ionicons
            style={{ marginLeft: 20, color: "red" }}
            name="power-outline"
            size={24}
          />

          <View style={{ marginLeft: 20 }}>
            <BlackText14 text={"Sign Out"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
  },
  box2: {
    width: "90%",
    backgroundColor: "#FFCCCB",
    elevation: 1,
    marginTop: 20,
    height: 60,
    borderRadius: 12,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
