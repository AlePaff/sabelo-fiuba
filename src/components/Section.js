import React from "react"
import { Heading, Text } from '@chakra-ui/react'

// import COLORES from "./theme.js"

function Section({ bgColor, titulo, desc, display, footerDesc, children }) {
    return (
        <div className={bgColor} style={{ maxWidth: '1800px' }}>
            <Heading >{titulo}</Heading>
            <Text marginBottom={4}> {desc}</Text>

            {/* se le pasa un estilo por parametro, si es display grid o por columnas */}
            <div className={display}>
                {children}
            </div>

            <Text textAlign='left' marginTop={4}>{footerDesc}</Text>
        </div>
    )
}

export default Section;
