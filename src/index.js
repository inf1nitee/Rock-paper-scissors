import ReactDOM from "react-dom";
import React, { useState } from "react";


import "./index.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: []
    };
  }

  playerMove = (chosenOption) => {
    this.setState({
      moves: [
        ...this.state.moves,
        {
          whoPlayed: "You played",
          option: chosenOption
        }
      ]
    });
    this.computerMove();
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  computerMove = () => {
    let {playerScore = 0} = this.state
    let options = ["Rock", "Paper", "Scissors"];
    let index = this.getRandomInt(3);
    let chosenOption = options[index];
    this.setState({
      moves: [
        ...this.state.moves,
        {
          whoPlayed: "Computer played",
          option: chosenOption
        }
      ]
    });
   
    if(index === 1 && chosenOption === 'Rock'){
      return this.setState({
        playerScore: playerScore + 0,
        Result: ""
      });
    } else if(index === 1 && chosenOption === 'Paper'){
      return this.setState({
        playerScore: playerScore ++,
        Result: ""
      });
    } else if(index === 1 && chosenOption === 'Scissors'){
      return this.setState({
        playerScore: playerScore - 1,
        Result: ""
      });
    } else if(index === 2 && chosenOption === 'Rock'){
      return this.setState({
        playerScore: playerScore - 1,
        Result: ""
      });
    } else if(index === 2 && chosenOption === 'Paper'){
      return this.setState({
        playerScore: playerScore + 0,
        Result: ""
      });
    } else if(index === 2 && chosenOption === 'Scissors'){
      return this.setState({
        playerScore: playerScore + 1,
        Result: ""
      });
    } else if(index === 3 && chosenOption === 'Paper'){
      return this.setState({
        playerScore: playerScore - 1,
        Result: ""
      });
    } else if(index === 3 && chosenOption === 'Rock'){
      return this.setState({
        playerScore: playerScore + 1,
        Result: ""
      });
    }else if(index === 3 && chosenOption === 'Scissors'){
      return this.setState({
        playerScore: playerScore + 0,
        Result: ""
      });
    }
  };
  
  render() {
    const{playerScore} = this.state
    return (
      <div className={"game"}>
        {this.state.moves.map((move, index) => (
          <div key={index} className={"gameRow"}>
            <h2 className={"whoPlayed"}>{move.whoPlayed}</h2>
            <h1 className="option">{move.option}</h1>
          </div>
        ))}
        <div className="options">
          <h2 className="choose">Pick one:</h2>
          <div className="buttons">
            <button onClick={() => this.playerMove("Rock")}>Rock</button>
            <button onClick={() => this.playerMove("Paper")}>Paper</button>
            <button onClick={() => this.playerMove("Scissors")}>Scissors</button>
            <h2 className="score">Score :  {playerScore}</h2>
            
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
