import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { getElementById } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import wishlistSlice from "../../store/wishlistSlice";
import "./style.scss";
import { getMovieData } from "./api";
import movieDataSlice from "../../store/movieDataSlice";
import { DETAILS_IMG_URL } from "../../constants/constants";

const Details = () => {
  const { wishlist, movieData } = useSelector((state) => state);
  let { id } = useParams();
  const item = getElementById(id);
  const dispatch = useDispatch();
  const isDataAvailable = movieData.status_message ? false : true;

  const addToWishList = () => {
    const element = wishlist.find(({ title }) => item.name === title);
    if (!element) dispatch(wishlistSlice.actions.addToWishList(item.name));
  };

  const fetchData = async () => {
    const data = await getMovieData(id);
    dispatch(movieDataSlice.actions.putMovieData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("movieData", movieData);
  const movieImage = DETAILS_IMG_URL + movieData.poster_path;
  console.log("image", movieImage);
  return (
    <>
      <Header />
      {isDataAvailable ? (
        <>
          <div className="detailsPage">
            <div className="imgContainer">
              <img
                className="imgDesign"
                test-dataid="details-image"
                src={movieImage}
                alt={id + " img"}
              ></img>
            </div>
            <div className="btnContainer">
              <h4 className="detailsGenre" test-dataid="details-name">
                {movieData.title}
              </h4>
              <h5 className="detailsTagline">{movieData.tagline}</h5>
              <button
                className="addToWishlistButton"
                test-dataid="details-ad-to-wishlist-btn"
                onClick={addToWishList}
              >
                Add to wishlist
              </button>
            </div>
          </div>
          <div className="detailsOverviewContainer">
            <div>
              <h4 className="detailsOverviewTitle">Overview:</h4>
            </div>
            <div className="detailsOverview">{movieData.overview}</div>
          </div>
        </>
      ) : (
        <h3 className="msgText">
          Sorry for the Inconvinience, {movieData.status_message}
        </h3>
      )}
    </>
  );
};

export default Details;
