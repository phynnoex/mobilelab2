import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities/index";
import React, { useEffect, useState } from "react";
import Physics from "./Physics";
export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  return (
    <View style={styles.container}>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        style={styles.gameContainer}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      {/*  */}

      
    </View>
  );
}

// Styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  control:{
    borderRadius: 20
  },
  watermark: {
    fontSize: 22,
    top: -20,
  },
  actionButton:{
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
  },
  actionUp: {
    left: 0,
    top: 5,
    right: 0,
    bottom: 0,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
  },
  actionDown: {
    left: 0,
    top: 15,
    right: 0,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
  },
  actionLeft: {
    left: -100,
    top: -50,
    right: 0,
    bottom: 0,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
  },
  actionRight: {
    left: 100,
    top: -105,
    right: 0,
    bottom: 0,
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
  },
  centerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
