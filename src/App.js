import { Container } from 'react-bootstrap';
import './App.css';
import FormClima from './components/FormClima';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Container>
   <Heading></Heading>
   <FormClima></FormClima>
   </Container>
  );
}

export default App;
