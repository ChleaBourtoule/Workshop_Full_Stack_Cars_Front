import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import Cars from './components/Cars';
import Title from './components/Title';

function App() {
  const [plate, setPlate] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [cars, setCars]= useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  console.log(brand);
  console.log(model);

  useEffect(() => {
    let query = '';
    if (plate && brand && model) {
      query = `?plate=${plate}&brand=${brand}&model=${model}`
    }
    else if (plate && brand) {
      query = `?plate=${plate}&brand=${brand}`
    }
    else if (plate && model) {
      query = `?plate=${plate}&model=${model}`
    }
    else if (plate) {
      query = `?plate=${plate}`
    }
    else if (brand && model) {
      query = `?brand=${brand}&model=${model}`
    }
    else if (brand) {
      query = `?brand=${brand}`
    }
    else if (model) {
      query = `?model=${model}`
    }
    axios
    .get(`http://localhost:3002/api/cars${query}`)
    .then((result)=>result.data)
    .then((data) => setCars(data))
    .catch((error)=>console.log(error));
  }, [plate, brand, model])

  useEffect(() => {
    axios
    .get(`http://localhost:3002/api/cars/brands`)
    .then((result) => result.data)
    .then((data) => setBrands(data))
    .catch((error) => console.log(error));
  },[])

  useEffect(() => {
    let query = '';
    if (brand !== '') {
      query = `?brand=${brand}`
    }
    axios
    .get(`http://localhost:3002/api/cars/brands/models${query}`)
    .then((result) => result.data)
    .then((data) => setModels(data))
    .catch((error) => console.log(error));
  }, [brand])

  return (
    <div className="App">
      <Title/>
      <Filters plate={plate} setPlate={setPlate} setBrand={setBrand} brands={brands} models={models} setModel={setModel}/>
      <Cars cars={cars}/>
    </div>
  );
}

export default App;
