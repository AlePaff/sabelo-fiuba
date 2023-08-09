import './App.css';
import "./styles.css" // Se usará para cada componente también.
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from './components/MainLayout';

function App() {

  return (
    <ChakraProvider>
      <MainLayout></MainLayout>
    </ChakraProvider>
  );
}

export default App;
