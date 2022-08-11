import React, { useState } from "react";
import { useSelector } from "react-redux";


const WishlistButton = ({ id }) => {
  const [showWishList, setWishlistVisibility] = useState(false)
  const { wishlist } = useSelector((state) => state);

  
  const showWishlist = () => {
    console.log('wishhh', wishlist)
    setWishlistVisibility((prevValue) => !prevValue)
  }
  return (
    <>
    <button onClick={showWishlist}>Wishlist</button>
    {showWishList &&
    <>
      <h4>Wishlist Items:</h4>
      {wishlist.map((item) => {
        return <ul>{item.title}</ul>
      })}
    </>
    }
    </>
  )
}

export default WishlistButton;