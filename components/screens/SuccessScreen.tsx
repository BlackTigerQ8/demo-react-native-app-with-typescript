import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function SuccessScreen() {
  const goToHomeAndReset = () => {
    // Reset entire navigation stack to home
  };

  const goToMenu = () => {
    // Push new screen (allows going back)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Successful!</Text>
      <Text style={styles.message}>
        Thank you for your order. It will be delivered soon!
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToHomeAndReset}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={goToMenu}
      >
        <Text style={styles.buttonText}>Order More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#444",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#444",
    marginTop: 10,
  },
});
