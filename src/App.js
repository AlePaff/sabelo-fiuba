import './App.css';
import "./styles.css"       //se usará para cada componente tambien
import Section from './components/Section.js'
import CardSabelo from './components/CardSabelo.js'
import CardVarios from './components/CardVarios.js'
import Footer from './components/Footer.js'
import { ChakraProvider } from '@chakra-ui/react'
// import Data from './datos.json'


const categoriasAll = {
  "material_y_apuntes": {
    "titulo": "Material y apuntes",
    "desc": "Para paginas que engloban muchas materias",
    "footerDesc": "Tener en cuenta que varias materias son compartidas entre carreras, asi algo de civil puede servir para mecánica o informática"
  },
  "general": {
    "titulo": "General",
  },
  "cursos_y_opiniones": {
    "titulo": "Cursos y Opiniones",
  },
  "organizativo": {
    "titulo": "Organizativo",
  },
  "grupos": {
    "titulo": "Grupos",
  },
  "noticias": {
    "titulo": "Noticias",
  },
  "varios": {
    "titulo": "Varios",
  }
};

const bgColorCategorias = {
  "material_y_apuntes": "seccion-material-apuntes",
  "general": "seccion-general",
  "cursos_y_opiniones": "seccion-cursos-opiniones",
  "organizativo": "seccion-organizacion",
  "grupos": "seccion-grupos",
  "noticias": "seccion-noticias",
  "varios": "seccion-varios"
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

        {/* mapea cada dato del json y crea un componente CardSabelo y de
         acuerdo a la categoria a la que pertenece le crea una seccion */}
        {categoriasUnicas.map(categoria => {
          return (
            <Section display={"display-cards-grid"} bgColor={bgColorCategorias[categoria] + " section"} titulo={categoriasAll[categoria].titulo} desc={categoriasAll[categoria].desc} footerDesc={categoriasAll[categoria].footerDesc}>

              {/* Solo muestra los datos que pertenecen a la categoria */}
              {data.filter(dato => dato.categoria === categoria).map(dato => {
                return (
                  <CardSabelo
                    nombre={dato.nombre}
                    desc={dato.desc}
                    link={dato.link}
                    imagen={dato.imagen}
                    categoria={dato.categoria}
                    observacion={dato.observacion}
                  />
                )
              })}
            </Section>
          )
        })}


        {/* Seccion Varios */}
        <Section display={"display-cards-column"} bgColor={bgColorCategorias["varios"] + " section"} titulo={categoriasAll["varios"].titulo} desc={categoriasAll["varios"].desc} footerDesc={categoriasAll["varios"].footerDesc}>
          {data.filter(dato => dato.categoria === "varios").map(dato => {
            return (
              <CardVarios
                nombre={dato.nombre}
                desc={dato.desc}
                link={dato.link}
                categoria={dato.categoria}
                observacion={dato.observacion}
              />
            )
          })}
        </Section>

      </div>


      <Footer></Footer>

    </ChakraProvider>
  );
}

export default App;
