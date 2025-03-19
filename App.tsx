import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./components/screens/HomeScreen";

export default function App({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}
