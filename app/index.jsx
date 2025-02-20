import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native-web";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aodea!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        go to profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
