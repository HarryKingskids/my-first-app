import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Movies from "./Movies";

const Movie = () => {
  const list = [
    {
      id: "1",
      img: require("../../images/Movie.png"),
      name: "Avengers Assemble RUN",
      description: "Avengers assemble save the world",
    },
    {
      id: "2",
      img: require("../../images/ironman.jpg"),
      name: "Iron Man 3: The Hero",
      description: "Can Iron Man Save the World for us",
    },
    {
      id: "3",
      img: require("../../images/spider-man.jpg"),
      name: "Spiderman",
      description: "Can Spiderman help people",
    },
    {
      id: "4",
      img: require("../../images/thor_love_and_thunder_dc.jpg"),
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
      <Text style={styles.headerText}>Movie Films Info</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={text}
          onChangeText={onTextChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {displayMovies.map((data) => (
          <Movies
            key={data.id}
            imageUrl={data.img}
            header={data.name}
            description={data.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
});
