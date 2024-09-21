import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the 96/97 Chicago Bulls App!</Text>
      <View style={styles.buttons}>
        <Button title="Find out more about the team" onPress={() => navigation.navigate("Team")} />
        <Button title="Find out more about the players" onPress={() => navigation.navigate("Players")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30
  },
  text: {
    fontSize: 60
  },
  buttons: {
    flexDirection: "column",
    gap: 10,

  }
});
