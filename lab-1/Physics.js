import Matter, { Sleeping } from "matter-js";
import React from "react";
import { Dimensions, View } from "react-native";
import TopBoundary from "./components/TopBoundary";

const Physics = (entities, { touches, dispatch, events, time }) => {

  let engine = entities.physics.engine;

  // Move the central square when the user touches the screen
  touches.filter((t) => t.type === "press").forEach((t) => {  
    let centralSquare = entities.centralSquare.body;
    Matter.Body.setVelocity(centralSquare, { x: 0, y: 3 }); // Move down on press
  });

  // Collision Handling
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;

    pairs.forEach(({ bodyA, bodyB }) => {
      let objALabel = bodyA.label;
      let objBLabel = bodyB.label;

      // If centralSquare (Player) hits bottomBoundary, move it to the right
      if (
        (objALabel === "bottomBoundary" && objBLabel === "Player") ||
        (objALabel === "Player" && objBLabel === "bottomBoundary")
      ) {
        

        // Move right after hitting the bottom boundary
        Matter.Body.setVelocity(entities.centralSquare.body, { x: 3, y: 0 });
      }
      //if centralSquare (Player) hits rightBoundary, move it up
      else if (
        (objALabel === "rightBoundary" && objBLabel === "Player") ||
        (objALabel === "Player" && objBLabel === "rightBoundary")
      ) {
        

        // Move right after hitting the bottom boundary
        Matter.Body.setVelocity(entities.centralSquare.body, { x: 0, y: -3 });
      }
      //if centralSquare (Player) hits topBoundary, move it left
      else if (
        (objALabel === "topBoundary" && objBLabel === "Player") ||
        (objALabel === "Player" && objBLabel === "topBoundary")
      ) {
        

        // Move right after hitting the bottom boundary
        Matter.Body.setVelocity(entities.centralSquare.body, { x: -3, y: 0 });
      }
      
    });
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
