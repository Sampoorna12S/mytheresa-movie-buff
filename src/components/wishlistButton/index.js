import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modal";
import "./style.scss";

const WishlistButton = ({ id }) => {
  const [showWishList, setWishlistVisibility] = useState(false);
  const { wishlist } = useSelector((state) => state);

  const handleShowWishlist = () => {
    setWishlistVisibility((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="btnDesign">
        <h1 className="headerTitle">MOVIE BUFF</h1>
        <button
          data-testid="wishlist-btn"
          className="btnWishlist"
          onClick={handleShowWishlist}
        >
          Wishlist
        </button>
      </div>
      {showWishList && (
        <Modal handleModalClose={handleShowWishlist}>
          {wishlist.length != 0 ? (
            <>
              <h4 data-testid="wishlist-title">Wishlist Items:</h4>
              {wishlist.map(({ title }) => (
                <ul key={title} data-testid={`wishlist-item-${title}`}>
                  {title}
                </ul>
              ))}
            </>
          ) : (
            <h4 data-testid="no-items-tag">No items currently</h4>
          )}
        </Modal>
      )}
    </>
  );
};

export default WishlistButton;
