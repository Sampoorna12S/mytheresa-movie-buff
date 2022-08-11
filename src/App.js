import React, { useState } from "react";
import HomePage from './pages/home/index';
import Details from "./pages/details";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<HomePage/>} />
        <Route path ='/details/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;