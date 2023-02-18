import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import NavBar from "../constants/NavBar";
import Text16 from "../constants/Text14 copy";
import AppButton from "./AppButton";

export default function WriteToUs() {
  return (
    <View>
      <NavBar title={"Write To Us"} icon={"chevron-back"} />
      <View style={styles.box}>
        <TextInput
          placeholder="Type Here..."
          style={styles.input2}
          multiline={true}
        />

        <View style={{ marginTop: 30 }}>
          <AppButton title={"Send Feedback"} page={"TabNavigator"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  termsbox: {
    width: "93%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  input2: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 190,
    width: "93%",
    marginTop: 30,
    borderRadius: 12,
    padding: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    display: "flex",
  },
});
