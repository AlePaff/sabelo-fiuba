import './App.css';
import "./styles.css"       //se usará para cada componente tambien
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
