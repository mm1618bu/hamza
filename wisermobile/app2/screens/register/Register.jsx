import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
