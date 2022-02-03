import React from "react";

const Cars = ({cars}) => {

    return (
        <div>
        {cars.length === 0 ? 
        <div className="chargement">Chargement...</div> 
        : cars.map((car, index)=> <div key={index} className='car-details'>
          <p>Plate Number: {car.plate}</p>
          <p>Date: {car.date}</p>
          <p>Model: {car.model}</p>
          <p>Brand: {car.brand}</p>
        </div>)}
      </div>
    )
};

export default Cars;