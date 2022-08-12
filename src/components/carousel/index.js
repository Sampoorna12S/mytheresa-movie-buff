import { useState } from "react";
import React from "react";
import Card from "../card";
// import leftArrow from "../../assests/icons/";

const Carousel = ({ data, numberOfCards = 3 }) => {
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
    <div
      data-testid="carousel-element"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <button onClick={prevHandler}>
        {/* <svg width="100" height="100">
          <leftArrow fill="yellow" />
        </svg> */}
        Prev
      </button>
      {data.slice(startFrom, startFrom + numberOfCards).map((item) => (
        <Card item={item} />
      ))}
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Carousel;
