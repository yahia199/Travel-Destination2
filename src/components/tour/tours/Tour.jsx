import React from 'react';
import {Link} from 'react-router-dom';
const Tour = ({data}) =>{           
    return(
        <>
        {            
            data.map((tour,index) => {                
                return(
                    <Link to={`/tour?=${tour.name}`} key={index}> <div key={index}> 
                        <h3>{tour.name}</h3>                        
                        <img src={tour.image} alt="" />                                                                      
                    </div>
                    </Link>
                )
                
            })
        }
        </>                
    )
};

export default Tour;
