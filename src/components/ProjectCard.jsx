import { Image, Flex, Text, Stack, Heading, Card, Tooltip, CardBody, Icon } from '@chakra-ui/react'
import { BiUserCircle } from 'react-icons/bi'
import { IoWarning } from 'react-icons/io5'
import InteractionMetrics from './InteractionMetrics'

import ReactGA from "react-ga4";
import { useState, useEffect } from 'react'

const mobile_size_pixel = 750;

// para los eventos de google analytics
const onClickHandler = () => {
    ReactGA.event({
        category: "card_sabelo_category",
        action: "Click_card_sabelo",
        label: "Card",
        value: 1,
    });
};



function CardSabelo({ nombre, desc, link, imagen, categoria, observacion, login_info }) {
    // const PLACEHOLDER = "images/placeholder.png";
    const PLACEHOLDER = "https://i.imgur.com/g374iQx.png";
    const ROOT_IMGS = './assets/';

    // images/fiuba-drive.jpg

    //si no existe la imagen, se usa el placeholder
    imagen = (imagen === "") ? PLACEHOLDER : imagen

    //detectar si se está en un dispositivo móvil
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
        <Card><CardBody>
            <div className='img-hover-zoom'>
                <a href={link} target="_blank"
                    onMouseDown={(e) => {
                        if (e.button === 1 || e.button === 0) {
                            //middle and left click
                            onClickHandler();
                        }
                    }}
                >
                    <Image
                        // maxWidth='100%'
                        src={ROOT_IMGS + imagen}
                        alt={nombre}
                        fallbackSrc={PLACEHOLDER}
                        fit='cover'
                        overflow='hidden'
                        cursor='pointer'        // cursor de mano cuando se pasa por encima
                    />
                </a>

            </div>
            <Stack mt='4' spacing='1' textAlign='left'>
                <Flex gap='2'>
                    {/* gap entre el icono de advertencia y el titulo */}
                    {
                        isMobile
                            // ? <Heading cursor='pointer' size='lg' onClickHandler={() => window.open(link, "_blank") && onClickHandler()}>{nombre}</Heading>
                            ? <a href={link} target="_blank" onClick={onClickHandler()}>
                                <Heading size='lg'>{nombre}</Heading>
                            </a>
                            : <Heading size='md'>{nombre}</Heading>
                    }
                    {observacion && (
                        <Tooltip label={observacion} fontSize='md' className='new-line'>
                            <button style={{ cursor: 'auto' }}>
                                <Icon as={IoWarning} w={7} h={7} color="red.400" />
                            </button>
                        </Tooltip>
                    )}
                    {login_info && (
                        <Tooltip label={login_info} fontSize='md' className='new-line'>
                            <button style={{ cursor: 'auto' }}>
                                <Icon as={BiUserCircle} w={7} h={7} color="blue.300" />
                            </button>
                        </Tooltip>
                    )}
                    {
                        <InteractionMetrics id_card={nombre}></InteractionMetrics>
                    }
                </Flex>

                <Text dangerouslySetInnerHTML={{ __html: desc }}>
                </Text>


            </Stack>
        </CardBody></Card>
    )
}

export default CardSabelo
