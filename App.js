import { StatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";
import Example05 from "./examples/Example05";
import Example06 from "./examples/Example06";
import Example07 from "./examples/Example07";
import Spring from "./component/Spring";
import Sequence from "./component/Sequence";
import Parallel from "./component/Parallel";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Parallel" component={Parallel} />
      <Tab.Screen name="Spring" component={Spring} />
      <Tab.Screen name="Sequence" component={Sequence} />
      </Tab.Navigator>
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