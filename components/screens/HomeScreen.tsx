import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Button,
} from "react-native";
import { images } from "../images";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>{images[0].title}</Text>
        <Image source={images[0].image} style={styles.image} />
        <Text style={styles.subtitle}>{images[0].description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("clicked!");
          }}
        >
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://aaalenezi.com")}
        >
          <View style={styles.linkContainer}>
            <Ionicons
              style={styles.linkIcon}
              name="link"
              size={24}
              color="blue"
            />
            <Text style={styles.link}>Eng. Abdullah Alenezi</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
    color: "#ff6347",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "dashed",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#1e90ff",
    // textDecorationLine: "underline",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  linkIcon: {
    color: "#1e90ff",
    transform: [{ rotate: "-45deg" }],
  },
  footer: {
    marginBottom: 30,
  },
});
