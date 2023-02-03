import { Image, Flex, Text } from '@chakra-ui/react'
import { Stack, Heading, Card, Tooltip, CardBody } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'


function CardSabelo(props) {

    return (
        // <Card maxWidth='1000px' w='100%' overflow='hidden' alignSelf="stretch" direction="row">
        <Card>
            <CardBody>
                <div className='img-hover-zoom img-hover-zoom--xyz'>
                    <Image
                        maxWidth='100%'
                        src={require('./../assets/' + props.imagen)}                        
                        alt={props.nombre}
                        fallbackSrc= {require('./../assets/images/placeholder.png')}
                        fit='cover'
                        overflow='hidden'
                        cursor='pointer'        // cursor de mano cuando se pasa por encima
                        onClick={() => window.open(props.link, "_blank")}
                    />
                    
                </div>
                <Stack mt='4' spacing='1' textAlign='left'>
                    <Flex gap='2'>
                        {/* gap entre el icono de advertencia y el titulo */}
                        <Heading size='md'>{props.nombre}</Heading>

                        {/* si la prop observacion existe entonces crear un tooltip */}
                        {props.observacion && (
                            <Tooltip label={props.observacion} fontSize='md' >
                                <WarningTwoIcon w={6} h={6} color="red.500" />
                            </Tooltip>
                        )}


                    </Flex>

                    <Text>
                        {props.desc}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardSabelo
