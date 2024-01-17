import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TICTAC = () => {
  const [Winner, setWinner] = useState("");
  const [LastClick, setLastClick] = useState("");
  const [Boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);

  const checkWinner = (Boxes) => {
    if (Boxes[0] !== "" && Boxes[0] === Boxes[1] && Boxes[0] === Boxes[2]) {
      setWinner(Boxes[0]);
    } else if (
      Boxes[3] !== "" &&
      Boxes[3] === Boxes[4] &&
      Boxes[3] === Boxes[5]
    ) {
      setWinner(Boxes[3]);
      console.log("winner", 2);
    } else if (
      Boxes[6] !== "" &&
      Boxes[6] === Boxes[7] &&
      Boxes[6] === Boxes[8]
    ) {
      setWinner(Boxes[6]);
      console.log("winner", 3);
    } else if (
      Boxes[0] !== "" &&
      Boxes[0] === Boxes[4] &&
      Boxes[0] == Boxes[8]
    ) {
      setWinner(Boxes[0]);
    } else if (
      Boxes[2] !== "" &&
      Boxes[2] == Boxes[4] &&
      Boxes[2] == Boxes[6]
    ) {
      setWinner(Boxes[2]);
    }
  };
  const onPress = (i) => {
    if (Boxes[i] === "" && Winner === "") {
      let nextClick = LastClick === "X" ? "O" : "X";
      Boxes[i] = nextClick;
      setBoxes([...Boxes]);
      setLastClick(nextClick);
      checkWinner(Boxes);
    }
  };

  const HandleReset = () => {
    setWinner("");
    setLastClick("");
    setBoxes(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <View style={styles.container}>
      {Winner !== "" && (
        <View>
          <Text style={styles.text}> Winner: {Winner}</Text>
          <TouchableOpacity style={styles.RESTART} onPress={HandleReset}>
            <Text style={styles.text}>RESTART</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.frame}>
        {Boxes.map((box, i) => (
          <TouchableOpacity
            key={i}
            style={styles.box}
            onPress={() => onPress(i)}
          >
            <TouchableOpacity>
              <Text style={styles.text}>{box}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    height: 350,
    width: 350,
    backgroundColor: "#33B0FF",
    flexWrap: "wrap",
    borderRadius: 30,
  },
  box: {
    display: "flex",
    margin: 2,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "cyan",
    height: 100,
    width: 100,
  },
  text: {
    margin: 2,
    color: "#000000",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: 50,
  },
  container: {
    width: 400,
    height: 500,
    backgroundColor: "rgb(255, 238, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  RESTART: {},
});

export default TICTAC;
