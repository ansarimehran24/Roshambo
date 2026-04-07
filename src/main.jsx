import { createRoot } from "react-dom/client";
import { useState } from "react";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return "It's a Tie!";
    
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You Win!";
    }
    return "Computer Wins!";
  };

  const handlePlay = (choice) => {
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      
      <h2>Your Choice: {playerChoice}</h2>
      <h2>Computer Choice: {computerChoice}</h2>
      
      <button onClick={() => handlePlay("Rock")}>Rock</button>
      <button onClick={() => handlePlay("Paper")}>Paper</button>
      <button onClick={() => handlePlay("Scissors")}>Scissors</button>
      
      <h2>{result}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App/>)