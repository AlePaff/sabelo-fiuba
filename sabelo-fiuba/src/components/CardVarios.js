import { Text } from '@chakra-ui/react'

function CardVarios(props) {
    return(
        <Text>
            {props.nombre}
            {props.desc}
        </Text>
    )
}

export default CardVarios