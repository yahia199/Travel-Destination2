

import {Routes, Route } from "react-router-dom";

import React from 'react';
import Home from './components/home/Home'
import MyTourDetails from './components/TourDetails/TourDetails'
import data from './data/data.json'


function App() {
  return (
    <Routes>    
    <Route exact path="/" element={<Home />} />
    <Route path={"/tour/:name"} element={<MyTourDetails data ={data} />} />
   </Routes>
  )
}
export default App;
