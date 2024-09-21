import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function TeamPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Button
            title="Home Page"
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Button
            title="Player Page"
            onPress={() => navigation.navigate("Players")}
          ></Button>
          <View style={styles.main}>
            <Image
              source={require("../assets/CHI-1997.png")}
              style={{
                width: "100%",
                height: 400
              }}
            />
            <Text style={styles.text}>

              The 1996-1997 Chicago Bulls were a dominant team in NBA history, finishing the regular season with a 69-13 record, just shy of their previous 72-win season. Led by Michael Jordan, who averaged 29.6 points per game, and supported by key players like Scottie Pippen and Dennis Rodman, the Bulls excelled on both ends of the floor. Jordan won his ninth scoring title, and the team clinched their fifth NBA Championship in seven years, defeating the Utah Jazz in six games in the NBA Finals. This season also featured Jordan's iconic "Flu Game" in Game 5 of the Finals, where he scored 38 points despite being visibly ill. The 1996-1997 Bulls were known for their tenacious defense, teamwork, and unmatched competitiveness under head coach Phil Jackson.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flexDirection: "column",
    gap: 20
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});
