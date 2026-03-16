import { Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react'
import ReactGA from 'react-ga4'

const onClick = () => {
    ReactGA.event({
        category: 'card_rip_category',
        action: 'Click_card_rip',
        label: 'Card',
        value: 1,
    })
}

function RipProjectList({ nombre, link, imagen }) {
    const PLACEHOLDER = 'https://i.imgur.com/g374iQx.png'
    const ROOT_IMGS = './assets/'
    const imageSrc = imagen === '' ? PLACEHOLDER : ROOT_IMGS + imagen

    return (
        <a
            href={link}
            target='_blank'
            onMouseDown={(e) => {
                if (e.button === 1 || e.button === 0) {
                    // middle and left click
                    onClick()
                }
            }}
        >
            <Card
                w='100%'
                _hover={{
                    background: '#c7ccd3',
                    transition: '0.15s',
                }}
                cursor='pointer'
            >
                <CardBody>
                    <Flex align='center' gap='3' textAlign='left'>
                        <Image
                            src={imageSrc}
                            alt={nombre}
                            fallbackSrc={PLACEHOLDER}
                            boxSize='1.5em'
                            borderRadius='full'
                            objectFit='cover'
                            flexShrink={0}
                        />
                        <Heading size='md'>{nombre}</Heading>
                    </Flex>
                </CardBody>
            </Card>
        </a>
    )
}

export default RipProjectList
