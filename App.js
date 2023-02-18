import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MainPage from "./src/screens/MainPage";
import SignIn from "./src/screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/constants/TabNavigator";
import WriteToUs from "./src/screens/WriteToUs";
import TermsConditions from "./src/screens/TermsConditions";
import PrivacyPolicy from "./src/screens/PrivacyPolicy";
import AboutUs from "./src/screens/AboutUs";
import ReportDetail from "./src/screens/ReportDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteToUs"
          component={WriteToUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportDetail"
          component={ReportDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
