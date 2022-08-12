import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style";

const Card = ({ item }) => {
  return (
    <div style={styles.cardBody}>
      <NavLink exact to={`/details/${item.id}`}>
        <img
          data-testid={`card-img-${item.id}`}
          src={item.imageUrl}
          alt="mcu.png"
        ></img>
      </NavLink>
      <p>{item.name}</p>
    </div>
  );
};

export default Card;
