import React from "react"
import Header from "../header/Header"
import Tour from "../tour/Tour"
import Footer from "../footer/Footer"




function Home({data}){
    return(
        <>
        <Header  />
        <Tour data={data} />
        <Footer />
        </>
    )
};

export default Home;