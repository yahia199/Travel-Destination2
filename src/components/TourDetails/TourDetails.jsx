
import React from 'react';
import { useParams } from 'react-router-dom';
const tourDetails = ({data}) =>{

const {name} = useParams();
   return(        
        <section>        
        {
            data.filter(tour => tour.name === name)
            .map((tour,index) => (
              <div key={index}> 
                <h2>{tour.name}</h2>
                <img src={tour.image} alt="" />  
                </div>
                ))
        }
        </section>                
    );
};

export default tourDetails;
