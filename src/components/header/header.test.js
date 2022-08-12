import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import WishlistButton from "../wishlistButton";
import store from "../../store";
import "@testing-library/jest-dom/extend-expect";
import wishlistSlice from "../../store/wishlistSlice";

describe("Wishlist Button", () => {
  let wishlistElement;
  beforeEach(() => {
    wishlistElement = render(
      <Provider store={store}>
        <WishlistButton />
        <div id="modal"></div>
      </Provider>
    );
  });

  it("Wishlist Button Renders", () => {
    let wishlistButton = wishlistElement.queryByTestId("wishlist-btn");
    expect(wishlistButton).toBeInTheDocument();
  });

  it("show No items when wishlist is empty", () => {
    let wishlistButton = wishlistElement.queryByTestId("wishlist-btn");
    fireEvent.click(wishlistButton);
    expect(wishlistElement.queryByTestId("no-items-tag")).toBeInTheDocument();
  });

  it("List items when wishlist has data", () => {
    let data = ["Action", "Comedy"];
    data.forEach((item) =>
      store.dispatch(wishlistSlice.actions.addToWishList(item))
    );

    let wishlistButton = wishlistElement.queryByTestId("wishlist-btn");
    fireEvent.click(wishlistButton);
    expect(wishlistElement.queryByTestId("wishlist-title")).toBeInTheDocument();
    data.forEach((item) =>
      expect(
        wishlistElement.queryByTestId(`wishlist-item-${item}`)
      ).toBeInTheDocument()
    );
  });
});
