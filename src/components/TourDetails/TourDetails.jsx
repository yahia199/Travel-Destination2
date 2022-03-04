
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';


export default function TourDetails({data}){
  let {id}= useParams();

  let city = data.filter(city =>city.id == id);
  const [seeMore, setSeeMore]= useState(false);
  
  let seeMoreHandle=()=>{
    setSeeMore(!seeMore)
  }

  return(
    <>
    <Header></Header>
    <article>
      <div>
        <h1>
 {city[0].name}
        </h1>
        <p>

        {seeMore ? city[0].info : `${city[0].info.slice(0,100)}.....`}
        <button onClick={()=>seeMoreHandle()}>{seeMore ? "See Less":"See More"}</button>
        </p>
        <img src= {city[0].image} alt="" />
       
      </div>
    </article>
    <Footer></Footer>
    </>
   
  )
};




// const tourDetails = ({data}) =>{

// const {name} = useParams();
//    return(        
//         <section>        
//         {
//             data.filter(tour => tour.name === name)
//             .map((tour,index) => (
//               <div key={index}> 
//                 <h2>{tour.name}</h2>
//                 <img src={tour.image} alt="" />  
//                 </div>
//                 ))
//         }
//         </section>                
//     );
// };

// export default tourDetails;
