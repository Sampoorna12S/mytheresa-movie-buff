import React from "react";
import { NavLink } from "react-router-dom";
import Details from "../../pages/details";

const Carousel = ({ item }) => {
  return(
    <div>
      <NavLink exact to={`/details/${item.id}`}>
        <img src={item.imageUrl} alt="mcu.png"></img>
      </NavLink>
      <p>{item.name}</p>
    </div>
  )
}

export default Carousel;