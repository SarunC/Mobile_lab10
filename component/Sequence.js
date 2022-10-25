import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const Sequence = (props) => {
  const animV1 = useRef(new Animated.Value(1)).current;
  const animV2 = useRef(new Animated.Value(0)).current;

  const spin = animV2.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animate = () => {
    console.log("animate...");
    Animated.sequence([
      Animated.timing(animV1, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animV1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start(() => {
      animV1.setValue(1);
      animV2.setValue(0);

    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, opacity: animV1, transform: [{ rotate: spin }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <Button title="Start" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});

export default Sequence;