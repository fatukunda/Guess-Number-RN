import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Guess a Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
      color: "white",
      fontSize: 20,
      fontFamily: "roboto-bold"
  },
});

export default Header;
