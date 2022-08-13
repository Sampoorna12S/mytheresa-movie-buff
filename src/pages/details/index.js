import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import { getClassName, getElementById } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import wishlistSlice from "../../store/wishlistSlice";
import "./style.scss";
import { getMovieData } from "./api";
import movieDataSlice from "../../store/movieDataSlice";
import { DETAILS_IMG_URL } from "../../constants/constants";

const Details = () => {
  const { wishlist, movieData } = useSelector((state) => state);
  const { id } = useParams();
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
  const movieImage = DETAILS_IMG_URL + movieData.poster_path;
  const randomClass = useMemo(getClassName, []);
  return (
    <>
      <Header />
      {isDataAvailable ? (
        <>
          <div className="detailsPage">
            <div className="imgContainer">
              <img
                className="imgDesign"
                data-testid="details-image"
                src={movieImage}
                alt={id + " img"}
              ></img>
            </div>
            <div className={`btnContainer ${randomClass}`}>
              <h4 className="detailsGenre" data-testid="details-name">
                {movieData.title}
              </h4>
              <h5 className="detailsTagline">{movieData.tagline}</h5>
              <button
                className="addToWishlistButton"
                data-testid="details-ad-to-wishlist-btn"
                onClick={addToWishList}
              >
                Add to wishlist
              </button>
            </div>
          </div>
          <div className={`detailsOverviewContainer ${randomClass}`}>
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
