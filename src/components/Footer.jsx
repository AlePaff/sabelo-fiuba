import { Box, IconButton, Text, Tooltip, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


function Footer() {

    //obtener la fecha de ultima actualización del repo de github
    const apiUrl = "https://api.github.com/repos/AlePaff/sabelo-fiuba/branches/main"
    const [showData, setShowData] = useState()      //estado para mostrar la fecha
    let displayData

    async function pullJson() {
        const response = await fetch(apiUrl)
        const responseData = await response.json()
        // console.log(responseData.commit.commit.author.date)
        displayData = responseData.commit.commit.author.date

        //transformar displayData en un formato de fecha
        let dateLastCommit = new Date(responseData.commit.commit.author.date)
        let day = dateLastCommit.getDate();
        let month = dateLastCommit.getMonth() + 1;      //getMonth() devuelve un valor entre 0 y 11
        let year = dateLastCommit.getFullYear();
        let formato = day + "/" + month + "/" + year;
        displayData = formato

        setShowData(displayData)        //actualizar el estado
    }

    useEffect(() => {
        pullJson()
    })

    return (
        <Box
            backgroundColor="#1b2932"
            color={"white"}
            padding={"30px 0px 10px 0px"}
            textAlign="center"
            fontSize={"sm"}
        >

            <Flex gap='1' justifyContent='center'>


                <Tooltip label="Ir al repositorio" placement='top'>
                    <a href="https://github.com/AlePaff/sabelo-fiuba" target="_blank">
                        <IconButton
                            icon={
                                <img src="https://github.githubassets.com/favicons/favicon.svg"
                                    alt="github" height="32" width="32"
                                    //invertir colores de la imagen
                                    style={{ filter: 'invert(100%)' }}
                                />}
                            size="lg"
                            isRound={true}
                            _hover={{ backgroundColor: "#2d3748" }}
                            variant="ghost"     //hace que solo aparezca el icono sin el fondo
                        />
                    </a>
                </Tooltip>

                <Tooltip label="Añadir un nuevo proyecto" placement='top'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9v8y4L8Dtek3y9u8d5uSiB5SK-P-3FUvo1nhOJIF-pD8j3A/viewform?usp=pp_url&entry.385134802=Otro" target="_blank">
                        <IconButton
                            icon={
                                <img src="https://www.svgrepo.com/show/217145/forms-document.svg"
                                    alt="nuevo proyecto" height="32" width="32" />}
                            size="lg"
                            colorScheme="teal"
                            isRound={true}
                            _hover={{ backgroundColor: "#2d3748" }}
                            variant="ghost"
                        />
                    </a>
                </Tooltip>

                <Tooltip label="Feedback" placement='top'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScHmIO1xOiU0hGEVrJgEbKwY8YR4RDCv7aPU451oGFxkY_rgg/viewform?usp=sf_link" target="_blank">
                        <IconButton
                            icon={
                                <img src="https://i.imgur.com/kZ3x8aj.png"
                                    alt="feedback" height="32" width="32" />}
                            size="lg"
                            colorScheme="teal"
                            isRound={true}
                            _hover={{ backgroundColor: "#2d3748" }}
                            variant="ghost"
                        />
                    </a>
                </Tooltip>

            </Flex>

            <Text fontSize="xs" color="gray.500" mt="2">
                Última actualización: {showData}
            </Text>

            <br></br>
            Hecho con <span role="img" aria-label="amor"> ❤️ </span> por Ale

        </Box>


    )
}

export default Footer