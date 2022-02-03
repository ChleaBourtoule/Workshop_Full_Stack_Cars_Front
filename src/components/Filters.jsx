import React from "react";
import './filters.css';

const Filters = ({ plate, setPlate, setBrand, brands, models, setModel }) => {

    return (
        <div className='filters'>
            <div>
              <label>Plate Number: </label>
              <input type="text" value={plate} placeholder="Enter a plate number" onChange={(e) => setPlate(e.target.value)}/>
            </div>
            <div>
              <label>Brand: </label>
              <select onChange={(e) => setBrand(e.target.value)}>
                <option value="">--Please choose a brand--</option>
                {brands.map((brand, index) => <option key={index} value={brand.name}>{brand.name}</option>)}
              </select>
            </div>
            <div>
              <label>Model: </label>
              <select onChange={(e) => setModel(e.target.value)}>
                <option value="">--Please choose a model--</option>
                {models.map((model, index) => <option key={index} value={model.name}>{model.name}</option>)}
              </select>
            </div>
        </div>
    )
}

export default Filters;