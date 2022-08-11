import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { getElementById } from '../../utils/util';
import { useDispatch } from "react-redux";
import wishlistSlice from "../../store/wishlistSlice";

const Details = () => {
  const { id } = useParams();
  const item = getElementById(id);
  const dispatch = useDispatch()
  const addToWishList = () => {
    console.log('clicked...', item.name)
    dispatch(wishlistSlice.actions.addToWishList(item.name))
  }

  return (
    <>
      <Header />
      <img src={item.imageUrl} alt={id+' img'}></img>
      <h4>{item.name}</h4>
      <button onClick={addToWishList}>Add to wishlist</button>
    </>
  )
}

export default Details;