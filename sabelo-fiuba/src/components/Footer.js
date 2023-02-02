// 3 iconos 
// fecha de ultima actualización
import { Box, IconButton, Text, Tooltip, Flex } from '@chakra-ui/react'
import { WarningTwoIcon, SearchIcon } from '@chakra-ui/icons'


function Footer(props) {
    return (
        <Box
            backgroundColor="#1b2932"
            color={"white"}
            padding={10}
            textAlign="center"
            fontSize={"sm"}
        >

            <Flex gap='2' justifyContent='center'>


                {/* icono con tooltip y link a google.com */}
                <Tooltip label="Buscar en Google" fontSize='md' >
                    <IconButton
                        // w={6} h={6} color="red.500"
                        aria-label="Buscar en Google"
                        icon={<SearchIcon />}
                        size="lg"
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => window.open('https://www.google.com', '_blank')}
                    />
                </Tooltip>

                <Tooltip label="Buscar en Google" fontSize='md' >
                    <IconButton
                        // w={6} h={6} color="red.500"
                        aria-label="Buscar en Google"
                        icon={<SearchIcon />}
                        size="lg"
                        colorScheme="teal"
                        variant="outline"
                        onClick={() => window.open('https://www.google.com', '_blank')}
                    />
                </Tooltip>


            </Flex>



            <Text>
                {props.children}
            </Text>

        </Box>


    )
}

export default Footer