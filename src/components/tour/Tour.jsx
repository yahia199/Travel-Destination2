import React from 'react'
import Tours from './tours/Tours'

let Tour =({data})=>{
     return(
    <>
    {
    data.map((city,index) =>{
        
        return(
       <Tours key={index} city={city} />

        )
       
    })
}
    </>
)
};

export default Tour;