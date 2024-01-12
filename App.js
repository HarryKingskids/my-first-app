// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import MyGoal from "./src/MyGoal";
// import TICTAC from "./src/TICTAC";
// export default function App() {
//   return (
//     <SafeAreaView>
//       <StatusBar
//         backgroundColor={"white"}
//         barStyle={"dark-content"}
//         translucent={false}
//       />
//       <MyGoal />
//       <TICTAC />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "30px",
//   },
//   text: {
//     color: "#000000",
//     alignItems: "center",
//     display: "flex",
//     flexDirection: "column",
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import Movie from "./src/Movie.js";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const App = () => {
  const list = [
    {
      id: "1",
      img: require("./images/Movie.png"),
      name: "Avengers Assemble RUN",
      description: "Avengers assemble save the world",
    },
    {
      id: "2",
      img: require("./images/ironman.jpg"),
      name: "Iron Man",
      description: "Can Iron Man Save the World for us",
    },
    {
      id: "3",
      img: require("./images/spider-man.jpg"),
      name: "Spiderman",
      description: "Can Spiderman help people",
    },
    {
      id: "4",
      img: require("./images/thor_love_and_thunder_dc.jpg"),
      name: "Thor love and thunder",
      description: "Thor falls in love",
    },
  ];

  const [text, setText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const onTextChange = (text) => {
    const searchText = text;
    setText(searchText);
  };

  const handleSearch = () => {
    const filtered = list.filter((movie) =>
      movie.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  const displayMovies = filteredMovies.length > 0 ? filteredMovies : list;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movie Films info</Text>
      <View>
        <TextInput
          placeholder="Search"
          value={text}
          onChangeText={onTextChange}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.image}>
          {list.map((data) => (
            <Movie
              key={data.id}
              imageUrl={data.img}
              header={data.name}
              description={data.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
  },
});
