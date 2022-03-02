import React from "react";
import Home from "./components/home/Home"
import data from "./data/data.json"



function App(){
    return(
        <Home data={data}/>
    )
};
export default App;