import React from "react"
// import COLORES from "./theme.js"

function Section(props) {
    return (
        <div className={props.estilos}>
                <h2>{props.titulo}</h2>
                <p>{props.desc}</p>
                <div>lista de cartas</div>
                <p className="alig-izq">{props.footerDesc}</p>
        </div>
    )
}

export default Section;

// titulo
// descripcion
// contenido
// footer