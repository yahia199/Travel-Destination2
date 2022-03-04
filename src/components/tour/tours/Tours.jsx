import React from 'react';
import {Link} from 'react-router-dom';

export default function Tours({city}){
    return(
        <div>
               <h2>{city.name}</h2>
            <Link to={`city/${city.id}`}>
        <img src={city.image} alt="" />
            </Link>

        </div>
      
    )
}


