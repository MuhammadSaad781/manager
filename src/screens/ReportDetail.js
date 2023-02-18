import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import NavBar from "../constants/NavBar";
import BlackText14 from "../constants/BlackText14";
import Text14 from "../constants/Text14";
import { Colors } from "../constants/Colors";
import BlackText16 from "../constants/BlackText16";
import * as Font from "expo-font";
import { EvilIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";
export default function ReportDetail() {
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
    <View>
      <NavBar title={"Report Details"} icon={"chevron-back"} />
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Name"} />
          <Text14 text={"David Warner"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Phone Number"} />
          <Text14 text={"(425) 522-1212"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Apartment #"} />
          <Text14 text={"267-ADK"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"State"} />
          <Text14 text={"Texas"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"City"} />
          <Text14 text={"El Paso"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Property"} />
          <Text14 text={"Lake Fairway"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Check-In"} />
          <Text14 text={"2:24 AM"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={styles.parent}>
        <View style={styles.item}>
          <BlackText14 text={"Check-Out"} />
          <Text14 text={"2:39 AM"} />
        </View>
        <View style={styles.greyline}></View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <BlackText16 text={"Description"} />
        <View style={{ marginTop: 10 }}>
          <Text14
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            }
          />
        </View>
      </View>
      <View style={styles.imagebutton}>
        <View
          style={{
            display: "flex",

            flexDirection: "row",
          }}
        >
          <View style={styles.iconbox}>
            <EvilIcons name="image" size={36} style={styles.icon} />
          </View>
          <View style={styles.textitem}>
            <BlackText14 text={"Capture_1201.PNG"} />
          </View>
        </View>
        <TouchableOpacity style={styles.editicon}>
          <Text style={styles.bluetext}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <AppButton title={"Print as PDF"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greyline: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#D6D6D6",
    height: 1,
    marginTop: 10,
  },
  imagebutton: {
    width: "90%",
    backgroundColor: "#ECECEC",
    height: 70,
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconbox: {
    display: "flex",
    width: 50,
    height: 50,

    borderRadius: 12,
    marginLeft: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textitem: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
  },
  editicon: {
    backgroundColor: Colors.lightblue,
    width: 60,
    height: 40,
    borderRadius: 12,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bluetext: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: Colors.primary,
  },
  icon: {
    color: Colors.primary,
  },
});
