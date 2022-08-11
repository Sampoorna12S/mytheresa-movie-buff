import { useState } from "react";
import React from "react";
import Card from "../card";

const Carousel = ({ data, numberOfCards = 3 }) => {
  console.log("data", data);
  const [startFrom, setStartFrom] = useState(0);

  const prevHandler = () => {
    if (startFrom != 0) setStartFrom((prevValue) => prevValue - 1);
    else setStartFrom(data.length - numberOfCards);
  };

  const nextHandler = () => {
    if (startFrom != data.length - numberOfCards)
      setStartFrom((prevValue) => prevValue + 1);
    else setStartFrom(0);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={prevHandler}>Prev</button>
      {data.slice(startFrom, startFrom + numberOfCards).map((item) => (
        <Card item={item} />
      ))}
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Carousel;
