import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Card = ({ item }) => {
  return (
    <div className="cardBody">
      <NavLink exact to={`/details/${item.id}`}>
        <img
          data-testid={`card-img-${item.id}`}
          src={item.imageUrl}
          alt="mcu.png"
        ></img>
        <div class="centered">{item.name}</div>
      </NavLink>
      <p style={{ color: "goldenrod" }}>{item.name}</p>
    </div>
  );
};

export default Card;
