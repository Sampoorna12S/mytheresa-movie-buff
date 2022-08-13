import { useState } from "react";
import React from "react";
import Card from "../card";
import "./style.scss";

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
    <div data-testid="carousel-element" className="carouselElement">
      <span onClick={prevHandler}>&lt;</span>
      {data.slice(startFrom, startFrom + numberOfCards).map((item) => (
        <Card item={item} />
      ))}
      <span onClick={nextHandler}>&gt;</span>
    </div>
  );
};

export default Carousel;
