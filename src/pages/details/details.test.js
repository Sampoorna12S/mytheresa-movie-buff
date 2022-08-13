import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Details from ".";
import genereSlice from "../../store/genereSlice";
import movieDataSlice from "../../store/movieDataSlice";

describe.skip("Details", () => {
  let detailsElement;
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
  store.dispatch(
    movieDataSlice.actions.putMovieData({
      success: true,
      status_code: 34,
    })
  );

  beforeEach(() => {
    detailsElement = render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
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
