import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>First Project</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    color: "red",
    fontWeight: "bold",
  },
});

export default HomeScreen;
