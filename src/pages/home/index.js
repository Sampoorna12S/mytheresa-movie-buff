import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import { getMovieGenere } from "./api";
import { getRefinedData } from "../../utils/util"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import genereSlice from '../../store/genereSlice';
import Header from "../../components/header";

const HomePage = () => {
  const dispatch = useDispatch()
  // const [genres, setGenres] = useState([])
  const genere = useSelector((state) => state.generes);
  console.log('genet', genere)

  async function fetchData () {
    let movieData = await getMovieGenere()
    movieData = getRefinedData(movieData.genres)
    dispatch(genereSlice.actions.storeGenere(movieData))//setGenres(movieData)
  }
  
  useEffect(() => {
    fetchData()
  },[])
                        
  return (
    <>
      <Header />
      {genere.map((item) => {
        return <Carousel item={item} ></Carousel>
      })}
    </>
  )
}

export default HomePage;