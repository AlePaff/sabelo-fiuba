import Section from './Section'
import CardSabelo from './CardSabelo'
import CardVarios from './CardVarios'
import Footer from './Footer'

import proyectos from './../data/proyectos.json'
import proyectos_varios from './../data/proyectos_varios.json'
import categoriasAll from './../data/sections_desc.json'


const bgColorCategorias = {
  "material_y_apuntes": "seccion-material-apuntes",
  "general": "seccion-general",
  "cursos_y_opiniones": "seccion-cursos-opiniones",
  "organizativo": "seccion-organizacion",
  "grupos": "seccion-grupos",
  "noticias": "seccion-noticias",
  "varios": "seccion-varios"
}


function SabeloFiuba() {
  // cada elemento del json tiene una categoría asociada
  // crear un componente Section por cada categoría
  // pasarle como children los elementos que correspondan a esa categoría

  const categorias = proyectos.map(proyecto => proyecto.categoria)
  const categoriasUnicas = [...new Set(categorias)]   // "..." es el spread operator


  return (
    <>
      <div>

        {/* mapea cada dato del json y crea un componente CardSabelo y de
         acuerdo a la categoria a la que pertenece le crea una seccion */}
        {categoriasUnicas.map(categoria => {
          return (
            <Section key={categoriasAll[categoria].titulo} display={"display-cards-grid"} bgColor={bgColorCategorias[categoria] + " section"} titulo={categoriasAll[categoria].titulo} desc={categoriasAll[categoria].desc} footerDesc={categoriasAll[categoria].footerDesc}>

              {/* Solo muestra los datos que pertenecen a la categoria */}
              {proyectos.filter(dato => dato.categoria === categoria).map(dato => {
                return (
                  <CardSabelo
                    key={dato.nombre}
                    nombre={dato.nombre}
                    desc={dato.desc}
                    link={dato.link}
                    login_info={dato.login_info}
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
        <Section key={proyectos_varios.titulo} display={"display-cards-column"} bgColor={bgColorCategorias["varios"] + " section"} titulo={categoriasAll["varios"].titulo} desc={categoriasAll["varios"].desc} footerDesc={categoriasAll["varios"].footerDesc}>
          {proyectos_varios.filter(dato => dato.categoria === "varios").map(dato => {
            return (
              <CardVarios
                key={dato.nombre}
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
    </>
  )
}


export default SabeloFiuba;
