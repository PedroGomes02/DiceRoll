import { useState } from "react";
import "./styles.css";

export default function App() {
  const [diceNumber, setDiceNumber] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [pulse, setPulse] = useState("pulse");

  const handlerClick = () => {
    setDiceNumber(Math.ceil(Math.random() * 6));
    setFadeIn(true);
    setPulse("noPulse");
    setTimeout(() => {
      setFadeIn(false);
      setPulse("pulse");
    }, 1000);
  };

  const fadeInAnimation = {
    opacity: fadeIn ? 0.25 : 1,
    transition: "opacity 1000ms linear",
  };

  return (
    <div className="App">
      <h1>My Dice Roll</h1>
      <button onClick={handlerClick}>Roll...</button>
      <h2 className={pulse} style={fadeInAnimation}>
        {diceNumber}
      </h2>
    </div>
  );
}
