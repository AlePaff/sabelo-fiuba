import { Stack, Heading, Card, CardBody, Box, Text } from '@chakra-ui/react'


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