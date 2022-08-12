import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { getElementById } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import wishlistSlice from "../../store/wishlistSlice";
import "./style.scss";

const Details = () => {
  const { wishlist } = useSelector((state) => state);
  let { id } = useParams();
  id = id ? id : "28";
  console.log("id----", id);
  console.log("useParams===", useParams());
  const item = getElementById(id);
  const dispatch = useDispatch();

  const addToWishList = () => {
    const element = wishlist.find(({ title }) => item.name === title);
    if (!element) dispatch(wishlistSlice.actions.addToWishList(item.name));
  };
  console.log("hellllo", window.location.href);
  console.log("hellllo123", window.location.pathname);

  return (
    <>
      <Header />
      <div className="detailsPage">
        <div className="imgContainer">
          <img
            className="imgDesign"
            test-dataid="details-image"
            src={item.imageUrl}
            alt={id + " img"}
          ></img>
        </div>
        <div className="btnContainer">
          <h4 className="detailsGenre" test-dataid="details-name">
            {item.name}
          </h4>
          <button
            className="addToWishlistButton"
            test-dataid="details-ad-to-wishlist-btn"
            onClick={addToWishList}
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
