import './App.css';
import "./styles.css"       //se usará para cada componente tambien
import { ChakraProvider } from '@chakra-ui/react'
import SabeloFiuba from './components/SabeloFiuba';

function App() {

  return (
    <ChakraProvider>
      <SabeloFiuba></SabeloFiuba>
    </ChakraProvider>
  );
}


export default App;
