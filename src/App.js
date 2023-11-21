import { Container } from 'react-bootstrap';
import './App.css';
import FormClima from './components/FormClima';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

const [clima, setClima]= useState({})

const ApiRequest = async ()=>{

  try {
    const respuesta = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c89f6a39d19f18c760e8065a09eb985')
console.log(respuesta.data)
  } catch  {
    console.log("error en el server")
  }

}
ApiRequest()


  return (
   <Container>
   <Heading></Heading>
   <FormClima></FormClima>
   </Container>
  );
}

export default App;
