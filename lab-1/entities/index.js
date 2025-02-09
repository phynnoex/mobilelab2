import Box from "../components/Box";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import Constants from "../Constants";
import TopBoundary from "../components/TopBoundary";
import LeftBoundary from "../components/LeftBoundary";
import RightBoundary from "../components/RightBoundary";
import BottomBoundary from "../components/BottomBoundary";

// const screenHeight = Dimensions.get("window").height;
// const screenWidth = Dimensions.get("window").width;

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0;

  return {
    physics: { engine, world },
    //Enemy
    movableSquare: Box(
      world,
      "green",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
      { width: 80, height: 80 },
      { isStatic: false, label: "Enemy" }
    ),
    //Player
    centralSquare: Box(
      world,
      "blue",
      { x: 40, y: 40 },
      { width: 20, height: 20 },
      { label: "Player" }
    ),

    //Boundary
    BoundaryTop: TopBoundary(
      world,
      "red",
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 30, width: Constants.WINDOW_WIDTH },
      {label: "topBoundary"}

    ),

    BoundaryLeft: LeftBoundary(
      world,
      "red",
      { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 },
      {label: "leftBoundary"}
    ),

    BoundaryRight: RightBoundary(
      world,
      "red",
      { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT /2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 },
      {label: "rightBoundary"}
    ),

    BoundaryBottom: BottomBoundary(
      world,
      "red",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT },
      { height: 30, width: Constants.WINDOW_WIDTH },
      {label: "bottomBoundary"}
    ),
  };
};
