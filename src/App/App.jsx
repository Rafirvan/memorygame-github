//TODO: ADD TIMER

import { useEffect, useRef, useState } from "react";
import Header1 from "../Header/Header1";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./App.scss";
import Card from "../Card/Card";
import uniqid from "uniqid";
import fillValue from "./AppFillValue";

export default function App() {
  const [score, setScore] = useState(0);
  const unclicked = useRef([]);
  const status = useRef("playing");

  let fillUnclicked = () => {
    reset();
    console.log(unclicked.current);
  };

  let reset = () => {
    console.log("hello");
    setScore(0);
    let arr = [];
    fillValue().map((e, index) => arr.push(index + 1));
    unclicked.current = [...arr];
  };

  let handleCardClick = (value) => {
    status.current = "playing";
    if (unclicked.current.includes(value)) {
      unclicked.current = unclicked.current.filter((e) => e != value);
      setScore(score + 1);
      if (unclicked.current.length == 0) {
        status.current = "win";
        reset();
      }
    } else {
      reset();
      status.current = "lose";
    }
  };

  let cards;
  let refreshCardsArray = () => {
    let positions = [];
    fillValue().map((e, index) => positions.push(index + 1));
    let randompos = positions.sort(() => Math.random() - 0.5);

    cards = fillValue().map((e, value) => {
      return (
        <Card
          key={uniqid()}
          text={e}
          value={value + 1}
          position={randompos.shift()}
          click={(value) => handleCardClick(value)}
        />
      );
    });
  };

  refreshCardsArray();

  useEffect(() => {
    fillUnclicked();
  }, []);

  return (
    <div className="App">
      <Header1 text="memory cards" color="white" bgcolor="black" font="pixel" />
      <Scoreboard
        score={score}
        max={fillValue().length}
        status={status.current}
      />
      <section className="body">{cards}</section>
    </div>
  );
}
