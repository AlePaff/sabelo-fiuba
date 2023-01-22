import React from "react"
import { Heading, Text } from '@chakra-ui/react'

// import COLORES from "./theme.js"

function Section(props) {

    
    return (

        <div className={props.bgColor} style={{ maxWidth: '1800px' }}>
            <Heading>
                {props.titulo}
            </Heading>

            <Text>{props.desc}</Text>
            <div style={{
                "display": "grid",
                // "gridTemplateColumns": "1fr 1fr",
                // "gridTemplateColumns": "repeat(auto-fill, minmax(2fr, 100px))",
                "gridTemplateColumns": "1fr 1fr",
                "gridGap": "1rem",
                "justifyContent": "stretch",
                "alignItems": "stretch"

            }}>
                {props.children}
            </div>
            <Text textAlign='left'>{props.footerDesc}</Text>
        </div>
    )
}

export default Section;

// titulo
// descripcion
// contenido
// footer