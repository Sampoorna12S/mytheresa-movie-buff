import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Details from ".";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import genereSlice from "../../store/genereSlice";

describe("Details", () => {
  let detailsElement = render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>
  );
  const mockLocation = "http://localhost:3000/details/28";

  beforeEach(() => {
    // location = window.location;
    // mockLocation.replace = jest.fn();
    // delete window.location;
    store.dispatch(
      genereSlice.actions.storeGenere([
        {
          id: 28,
          name: "Action",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR20Rpup3E5NzybJWLN0toybNyFsVHL3dXwxaeO-08XA-SJRM_iUbvRkoT72Bh_kXTGfQ&usqp=CAU",
        },
      ])
    );
    window.location.href = window.location.assign(mockLocation);
  });

  it("Header renders", () => {
    expect(detailsElement.queryByTestId("wishlist-btn")).toBeInTheDocument();
  });

  it("Render image element", () => {
    expect(detailsElement.queryByTestId("details-image")).toBeInTheDocument();
  });

  it("Render name element", () => {
    expect(detailsElement.queryByTestId("details-name")).toBeInTheDocument();
  });

  it("Render add to wishlist element", () => {
    expect(
      detailsElement.queryByTestId("details-ad-to-wishlist-btn")
    ).toBeInTheDocument();
  });
});
