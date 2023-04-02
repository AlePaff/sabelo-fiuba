import { Stack, Heading, Card, CardBody, Box, Text } from '@chakra-ui/react'
import ReactGA from "react-ga4";

const onClick = () => {
    ReactGA.event({
        category: "card_varios_category",
        action: "Click_card_varios",
        label: "Card",
        value: 1,
    });
};


function CardVarios({ nombre, desc, link, categoria, observacion }) {
    return (
        <a
            href={link}
            target="_blank"
            onMouseDown={(e) => {
                if (e.button === 1 || e.button === 0) {
                    //middle and left click
                    onClick();
                }}
            }
        >
            <Card
                w='100%'
                _hover={{
                    // background: '#7394B5',
                    background: '#a5bcd3',
                    color: 'white',
                    // opacity: '0.6',
                    transition: '0.15s',
                }}
                cursor='pointer'
            >
                <CardBody>
                    <Stack spacing='4'>
                        <Box textAlign={"left"}>
                            <Heading size='md'>
                                {nombre}
                            </Heading>
                            {/* //texto sin negrita y sin formato */}
                            <Text fontWeight='normal'>
                                {desc}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </a>
    )
}



export default CardVarios