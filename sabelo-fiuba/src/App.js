import './App.css';
import Section from './components/Section.js'
import CardSabelo from './components/Card.js'
import "./styles.css"       //se usará para cada componente tambien
import { ChakraProvider } from '@chakra-ui/react'


// const MATERIAL_Y_APUNTES = {
// }

function App() {
  return (
    <ChakraProvider>
      <div id="todas">

      <CardSabelo></CardSabelo>
      
      <CardSabelo></CardSabelo>


        <Section estilos={"section seccion-material-apuntes"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática" />
        <Section estilos={"section seccion-material-apuntes"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática" />

        {/* alternativas para pasar estilos
      Usando clases
      <MyComponent className={ condition ? 'Class1' : 'Class2' } />
      Usando estilos
      <MyComponent style={ condition ? styleObj1 : styleObj2 } />
 */}

      </div>



    </ChakraProvider>
  );
}

export default App;
