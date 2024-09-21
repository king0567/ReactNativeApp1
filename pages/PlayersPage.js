import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image
} from "react-native";

const michaelImage = require('../assets/jordami01.jpg');
const ronImage = require('../assets/harpero01.jpg');
const lucImage = require('../assets/longllu01.jpg');
const scottieImage = require('../assets/pippesc01.jpg');
const dennisImage = require('../assets/rodmade01.jpg');

export default function PlayersPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Home Page"
        onPress={() => navigation.navigate("Home")}
      ></Button>
      <Button
        title="Team Page"
        onPress={() => navigation.navigate("Team")}
      ></Button>
      <View>
        <Text style={styles.titleText}>
          Starting 5
        </Text>
        <Text style={styles.h2Text}>
          -Click on a player to view their stats-
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>

        (
          <Pressable onPress={() => alert(item.stats)}>
            <View style={styles.listItem}>
              <Image
                source={item.image}
                style={{
                  borderColor: "#eee",
                  borderWidth: 5,
                  width: 90,
                  height: 120,
                }}
              />
              <Text
                style={styles.cardText}
              >
                {item.title}
              </Text>
            </View>
          </Pressable>

        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Michael Jordan",
    image: michaelImage,
    stats: "Michael Jordan's 1996-1997 Playoffs Stats: 31.1 PPG, 7.9 RPG, 3.8 APG, 1.6 SPG, 0.9 BPG, 45.6 FG%, 19.4 3P%, 83.1 FT%."
  },
  {
    id: "2",
    title: "Ron Harper",
    image: ronImage,
    stats: "Ron Harper's 1996-1997 Playoffs Stats: 6.3 PPG, 3.2 RPG, 2.6 APG, 0.9 SPG, 0.6 BPG, 43.4 FG%, 21.1 3P%, 66.7 FT%."
  },
  {
    id: "3",
    title: "Luc Longley",
    image: lucImage,
    stats: "Luc Longley's 1996-1997 Playoffs Stats: 7.6 PPG, 3.9 RPG, 1.4 APG, 0.6 SPG, 1.0 BPG, 47.3 FG%, 0.0 3P%, 64.6 FT%."
  },
  {
    id: "4",
    title: "Scottie Pippen",
    image: scottieImage,
    stats: "Scottie Pippen's 1996-1997 Playoffs Stats: 19.2 PPG, 6.8 RPG, 3.8 APG, 1.7 SPG, 1.0 BPG, 41.5 FG%, 30.0 3P%, 77.5 FT%."
  },
  {
    id: "5",
    title: "Dennis Rodman",
    image: dennisImage,
    stats: "Dennis Rodman's 1996-1997 Playoffs Stats: 4.4 PPG, 8.4 RPG, 1.1 APG, 0.5 SPG, 0.1 BPG, 38.5 FG%, 0.0 3P%, 52.9 FT%."
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    gap: 10,
    backgroundColor: "red"

  },
  cardText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  h2Text: {
    fontSize: 20,
    textAlign: "center"
  }

});
