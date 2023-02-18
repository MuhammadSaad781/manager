import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import NavBar from "../constants/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import BlackText14 from "../constants/BlackText14";
import Text12 from "../constants/Text12";
import { useNavigation } from "@react-navigation/native";
export default function IncidentReports() {
  const navigation = useNavigation();
  return (
    <View style={styles.parent}>
      <NavBar title={"Incident Reports"} />
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text12 text={"Today"} />
      </View>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("ReportDetail")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.box}>
            <FontAwesome name="file-text-o" size={22} color="#246BFD" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 8,
            }}
          >
            <BlackText14 text={"Dear resident your valet will arr..."} />
            <Text12 text={"8:03 PM"} />
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text12 text={"10 Jan, 2023"} />
      </View>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("ReportDetail")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.box}>
            <FontAwesome name="file-text-o" size={22} color="#246BFD" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 8,
            }}
          >
            <BlackText14 text={"Dear resident your valet will arr..."} />
            <Text12 text={"8:03 PM"} />
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("ReportDetail")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.box}>
            <FontAwesome name="file-text-o" size={22} color="#246BFD" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 8,
            }}
          >
            <BlackText14 text={"Dear resident your valet will arr..."} />
            <Text12 text={"8:03 PM"} />
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttoncontainer: {
    width: "90%",
    height: 80,
    display: "flex",
    justifyContent: "center",

    borderRadius: 12,
    backgroundColor: "white",
    alignSelf: "center",
    elevation: 1,
    marginTop: 20,
  },
  box: {
    display: "flex",
    height: 55,
    width: 50,
    borderRadius: 12,
    backgroundColor: "rgba(36, 107, 253,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
