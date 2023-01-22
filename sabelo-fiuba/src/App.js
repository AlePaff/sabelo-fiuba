import './App.css';
import Section from './components/Section.js'
import CardSabelo from './components/Card.js'
import "./styles.css"       //se usará para cada componente tambien
import { ChakraProvider } from '@chakra-ui/react'
// import Data from './datos.json'

// const MATERIAL_Y_APUNTES = {
// }


const categoriasAll = {
  "material_y_apuntes": {
    "titulo": "Material y apuntes",
    "desc": "Para paginas que engloban muchas materias",
    "footerDesc": "Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática"
  },
  "general":{
    "titulo": "General",
  },
  "cursos_y_opiniones":{
    "titulo": "Cursos y Opiniones",
  },
  "organizativo":{
    "titulo": "Organizativo",
  },
  "grupos":{
    "titulo": "Grupos",
  },
  "noticias":{
    "titulo": "Noticias",
  },
  "varios":{
    "titulo": "Varios",
  }
};

const bgColorCategorias = {
  "material_y_apuntes": "seccion-material-apuntes",
  "general":"seccion-general",
  "cursos_y_opiniones":"seccion-cursos-opiniones",
  "organizativo":"seccion-organizacion",
  "grupos":"seccion-grupos",
  "noticias":"seccion-noticias",
  "varios":"seccion-varios"
}




function App() {
  let data = require('./datos.json');

  // cada elemento del json tiene una categoría asociada
  // crear un componente Section por cada categoría
  // pasarle como children los elementos que correspondan a esa categoría

  const categorias = data.map(dato => dato.categoria)
  const categoriasUnicas = [...new Set(categorias)]   // "..." es el spread operator

  //quita "varios" de categoriasUnicas
  const index = categoriasUnicas.indexOf("varios");
  if (index > -1) {
    categoriasUnicas.splice(index, 1);
  }



  return (
    <ChakraProvider>
      <div id="todas">

        {/* mapea cada dato del json y crea un componente CardSabelo de
         acuerdo a la categoria a la que pertenece le crea una seccion */}
        {categoriasUnicas.map(categoria => {
          return (
            <Section bgColor={bgColorCategorias[categoria] + " section"} titulo={categoriasAll[categoria].titulo} desc={categoriasAll[categoria].desc} footerDesc={categoriasAll[categoria].footerDesc}>
              
              {/* Solo muestra los datos que pertenecen a la categoria */}
              {data.filter(dato => dato.categoria === categoria).map(dato => {
                return (
                  <CardSabelo
                    nombre={dato.nombre}
                    desc={dato.desc}
                    link={dato.link}
                    imagen={dato.nombre}
                    categoria={dato.categoria}
                    observacion={dato.observacion}
                  />
                )
              })}
            </Section>
          )
        })}
        
        {/* <CardSabelo/> */}

        {/* <Section bgColor={"seccion-material-apuntes section"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática">
        </Section> */}


        {data.map(datos => {
          return (
            <>              
              <CardSabelo
                nombre={datos.nombre}
                desc={datos.desc}
                link={datos.link}
                imagen={datos.nombre}
                categoria={datos.categoria}
                observacion={datos.observacion}
              />
            </>
          )
        })}

        <Section bgColor={"seccion-material-apuntes section"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática">


          <CardSabelo />
          <CardSabelo />
          <CardSabelo />
          <CardSabelo />
          <CardSabelo />

        </Section>


        <Section bgColor={"section seccion-noticias"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática">


          <CardSabelo />
          <CardSabelo />
          <CardSabelo />
          <CardSabelo />
          <CardSabelo />

        </Section>
        {/* <CardSabelo></CardSabelo> */}




        {/* <Section estilos={"section seccion-material-apuntes"} titulo="Material y apuntes" desc="Para paginas que engloban muchas materias" footerDesc="Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática" /> */}

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
