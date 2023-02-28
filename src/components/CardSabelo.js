import { Image, Flex, Text } from '@chakra-ui/react'
import { Stack, Heading, Card, Tooltip, CardBody } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import ReactGA from "react-ga4";
import { useState, useEffect } from 'react'

const onClick = () => {
    ReactGA.event({
        category: "card_sabelo_category",
        action: "click_card_sabelo",
        label: "Card",
        value: 1,
    });
};



function CardSabelo(props) {
    const mobile_size_pixel = 750;
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    //solo se actualizará cuando se cambie el tamaño de la ventana
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= mobile_size_pixel;



    return (
        // <CardInMobile mobile={isMobile} links={props.link}>
        <Card>
            <CardBody>
                <div className='img-hover-zoom img-hover-zoom--xyz'>
                    <Image
                        // maxWidth='100%'
                        src={require('./../assets/' + props.imagen)}
                        alt={props.nombre}
                        fallbackSrc={require('./../assets/images/placeholder.png')}
                        fit='cover'
                        overflow='hidden'
                        cursor='pointer'        // cursor de mano cuando se pasa por encima
                        onClick={() => window.open(props.link, "_blank") && onClick()}
                    />

                </div>
                <Stack mt='4' spacing='1' textAlign='left'>
                    <Flex gap='2'>
                        {/* gap entre el icono de advertencia y el titulo */}
                        {
                            isMobile
                                ? <Heading onClick={() => window.open(props.link, "_blank") && onClick()}>{props.nombre}</Heading>
                                : <Heading size='md'>{props.nombre}</Heading>
                        }
                        {props.observacion && (
                            <Tooltip label={props.observacion} fontSize='md' className='new-line'>
                                <button style={{cursor: 'auto'}}>
                                    <WarningTwoIcon w={6} h={6} color="red.500" />
                                </button>
                            </Tooltip>
                        )}



                    </Flex>

                    <Text dangerouslySetInnerHTML={{ __html: props.desc }}>
                    </Text>


                </Stack>
            </CardBody>
            {/* </CardInMobile> */}
        </Card>
    )
}

export default CardSabelo
