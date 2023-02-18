import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import IncidentReports from "../screens/IncidentReports";
import Notifications from "../screens/Notifications";
import Settings from "../screens/Settings";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Incident Reports") {
            iconName = focused ? "filetext1" : "filetext1";
          } else if (route.name === "Notification") {
            iconName = focused ? "bells" : "bells";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Incident Reports"
        component={IncidentReports}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
