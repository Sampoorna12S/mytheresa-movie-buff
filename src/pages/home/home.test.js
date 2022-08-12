import React from "react";
import { render } from "@testing-library/react";
import store from "../../store";
import Header from "../../components/header";
import Carousel from "../../components/carousel";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

describe("HomePage", () => {
  it("renders Home Component", () => {
    // expect(true).toBe(true);
    let { generes } = store.getState();
    let homeElement = render(
      <>
        <Provider store={store}>
          <Header />
          <Carousel data={generes} />
        </Provider>
      </>
    );
    expect(homeElement.queryByTestId("carousel-element")).toBeInTheDocument();
    expect(homeElement.queryByTestId("wishlist-btn")).toBeInTheDocument();
  });
});
