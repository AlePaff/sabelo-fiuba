import { Image, Flex, Text } from '@chakra-ui/react'
import { Stack, Heading, Card, Tooltip, CardBody } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'


function CardSabelo(props) {
    // const path = './../assets/'
    // const concat_path_image = path + props.imagen;
    console.log(props.imagen);
    // console.log(typeof(concat_path_image));
    // console.log(typeof('./../images/diq-fiuba.png'));

    return (
        // <Card maxWidth='1000px' w='100%' overflow='hidden' alignSelf="stretch" direction="row">
        <Card w='100%'>
            <CardBody>
                <div className='img-hover-zoom img-hover-zoom--xyz'>
                    <Image
                        maxWidth='100%'
                        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        // src={'./../assets/images/diq-fiuba.png'}
                        // src={require('./../assets/images/diq-fiuba.png')}
                        // src={require(`${concat_path_image}`)}
                        // src={require(concat_path_image)}
                        // src={require(props.imagen)}
                        // src={require(`${concat_path}`)}
                        // src={require(`./../assets/${props.imagen}`)}
                        src={require('./../assets/' + props.imagen)}
                        
                        alt={props.nombre}
                        // fallbackSrc= {require('./../assets/images/placeholder.png')}
                        fit='cover'
                        overflow='hidden'
                    />
                    {/* {<img src={concat_path_image} />} */}

                    
                </div>
                <Stack mt='5' spacing='3' textAlign='left'>
                    <Flex gap='2'>
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
