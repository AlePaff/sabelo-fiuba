import { Stack, Heading, Card, CardBody, Box, Text } from '@chakra-ui/react'
import ReactGA from "react-ga4";

const onClick = () => {
    ReactGA.event({
        category: "card_varios_category",
        action: "click_card_varios",
        label: "Card",
        value: 1,
    });
};


function CardVarios(props) {
    return (

        <Card
            w='100%'
            _hover={{
                // background: '#7394B5',
                background: '#a5bcd3',
                color: 'white',
                // opacity: '0.6',
                transition: '0.15s',
            }}
            onClick={() => window.open(props.link, "_blank") && onClick()}
            cursor='pointer'
        >
            <CardBody>
                <Stack spacing='4'>
                    <Box textAlign={"left"}>
                        <Heading size='md'>
                            {props.nombre}
                        </Heading>
                        <Text>
                            {props.desc}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>

        </Card>
    )
}



export default CardVarios