import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modal";
import "./style.scss";

const Header = ({ id }) => {
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
              <h4>Wishlist Items:</h4>
              <table>
                <thead data-testid="wishlist-title">
                  <tr>
                    <td>S.No</td>
                    <td>Items Added</td>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map(({ title }, index) => (
                    <tr key={title} data-testid={`wishlist-item-${title}`}>
                      <td>{index + 1}.</td>
                      <td>{title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <h4 data-testid="no-items-tag">No items currently</h4>
          )}
        </Modal>
      )}
    </>
  );
};

export default Header;
