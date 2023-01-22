import React from "react"
import { Heading, Text } from '@chakra-ui/react'

// import COLORES from "./theme.js"

function SectionList(props) {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', maxWidth: '1800px'}}>
            <Heading>
                {props.titulo}
            </Heading>
            <Text>{props.desc}</Text>
            {props.children}
        </div>
    )
}


export default SectionList;