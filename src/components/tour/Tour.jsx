import React from 'react'

let Tour =({data})=>{
     return(
    <>
    {
    data.map(city =>{
        console.log(city.id)
        return(
            <div key={city.id}>
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