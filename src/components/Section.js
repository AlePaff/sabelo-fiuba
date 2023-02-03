import React from "react"
import { Heading, Text } from '@chakra-ui/react'

// import COLORES from "./theme.js"

function Section(props) {

    
    return (

        <div className={props.bgColor} style={{ maxWidth: '1800px' }}>
            <Heading >{props.titulo}</Heading>
            <Text marginBottom={4}> {props.desc}</Text>

            {/* se le pasa un estilo por parametro, si es display grid o por columnas */}
            <div className={props.display}>
                {props.children}
            </div>

            <Text textAlign='left' marginTop={4}>{props.footerDesc}</Text>
        </div>
    )
}

export default Section;
