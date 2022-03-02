import React from 'react'

let Tour =({data})=>{
     return(
    <>
    {
    data.map(city =>{
        return(
            <div>
      <h2>{city.name}</h2>
        <img src={city.image} alt="" />
            </div>
       

        )
       
    })
}
    </>
)
};

export default Tour;