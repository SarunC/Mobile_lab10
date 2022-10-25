import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Parallel = (props) => {
  const animV1 = useRef(new Animated.Value(0.3)).current;
  const animV2 = useRef(new Animated.Value(0)).current;

  const translate = animV2.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0, -90, 0, 90, 0]
  });

  const animate = () => {
    console.log("animate...");
    Animated.parallel([
      Animated.spring(animV1, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animV2, {
        toValue: 4,
        duration: 4000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animV1.setValue(0.2);
      animV2.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: animV1 }] }}
        source={require("../assets/IT_Logo.png")}
      />
      <Animated.Text style={{ fontSize: 20, fontWeight: "bold", color: "orange", transform: [{ translateX: translate }] }}>
        Welcome to Faculty of IT!!
      </Animated.Text>
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

export default Parallel;