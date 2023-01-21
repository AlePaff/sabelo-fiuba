import { Image, Flex, Text } from '@chakra-ui/react'
import { Stack, Heading, Card, Tooltip, CardBody } from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'

function CardSabelo(props) {
    return (
        <Card maxW='sm'>
            <CardBody>
                <div className='img-hover-zoom img-hover-zoom--xyz'>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs' />
                </div>
                <Stack mt='6' spacing='3'>

                    <Flex gap='2'>
                        <Heading size='md'>Living room Sofa</Heading>

                        <Tooltip label='Phone number' fontSize='md' >
                            <WarningTwoIcon w={6} h={6} color="red.500" />
                        </Tooltip>
                    </Flex>

                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardSabelo
