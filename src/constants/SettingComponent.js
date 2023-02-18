import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BlackText14 from "./BlackText14";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "./Colors";
export default function SettingComponent({
  text,
  icon,
  materialicon,
  fonticon,
  anticon,
  page,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate(page)}
    >
      <Ionicons
        style={{ marginLeft: 20, color: Colors.grey }}
        name={icon}
        size={24}
      />
      <MaterialCommunityIcons
        style={{ color: Colors.grey }}
        name={materialicon}
        size={24}
      />
      <AntDesign style={{ color: Colors.grey }} name={anticon} size={24} />
      <FontAwesome style={{ color: Colors.grey }} name={fonticon} size={24} />
      <View style={{ marginLeft: 20 }}>
        <BlackText14 text={text} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    backgroundColor: "white",
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
