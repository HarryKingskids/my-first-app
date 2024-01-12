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
import MovieImage from "./images/Movie.png";
import MovieImage1 from "./images/ironman.jpg";
import MovieImage2 from "./images/spider-man.jpg";
import MovieImage3 from "./images/thor_love_and_thunder_dc.jpg";
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
      img: MovieImage,
      name: "Avengers Assemble RUN",
      description: "Avengers assemble",
    },
    {
      id: "2",
      img: MovieImage1,
      name: "Iron Man",
      description: "Can Iron Man Save the World for us,",
    },
    {
      id: "3",
      img: MovieImage2,
      name: "Spiderman",
      description: "Can Spiderman help people",
    },
    {
      id: "4",
      img: MovieImage3,
      name: "Thor love and thunder",
      description: "Thor falls in love",
    },
  ];

  const [text, setText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const onTextChange = (e) => {
    const searchText = e.target.value;
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
          type="text"
          placeholder="Search"
          value={text}
          onChange={onTextChange}
        />
        <TouchableOpacity onClick={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.image}>
        {/* <ScrollView style={styles.scrollView}> */}
        {displayMovies.map((data) => (
          <Movie
            imageUrl={data.img}
            header={data.name}
            description={data.description}
          />
        ))}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: "blue",
  },
  container: {},
  scrollView: {
    flex: 1,
    backgroundColor: "red",
  },
});
