import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
// Import your screens

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
