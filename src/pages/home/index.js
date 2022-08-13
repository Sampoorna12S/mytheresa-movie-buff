import React, { useEffect } from "react";
import { getMovieGenere } from "./api";
import { getRefinedData } from "../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import genereSlice from "../../store/genereSlice";
import Header from "../../components/header";
import Carousel from "../../components/carousel";

const HomePage = () => {
  const dispatch = useDispatch();
  const genere = useSelector((state) => state.generes);

  async function fetchData() {
    let movieData = await getMovieGenere();
    movieData = getRefinedData(movieData.genres);
    dispatch(genereSlice.actions.storeGenere(movieData));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Carousel data={genere} numberOfCards={3} />
      <Carousel data={genere} numberOfCards={2} />
      <Carousel data={genere} numberOfCards={1} />
    </>
  );
};

export default HomePage;
