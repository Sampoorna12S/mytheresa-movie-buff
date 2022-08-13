import { useState } from "react";
import React from "react";
import Card from "../card";
import RightArrow from "../../assests/images/rightArrow.svg";
import LeftArrow from "../../assests/images/leftArrow.svg";

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
      <LeftArrow
        style={{ width: "40px", fill: "goldenrod", cursor: "pointer" }}
        onClick={prevHandler}
      />
      {data.slice(startFrom, startFrom + numberOfCards).map((item) => (
        <Card item={item} />
      ))}
      <RightArrow
        style={{ width: "40px", fill: "goldenrod", cursor: "pointer" }}
        onClick={nextHandler}
      />
    </div>
  );
};

export default Carousel;
