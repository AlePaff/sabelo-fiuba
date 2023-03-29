import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState } from 'react'


function InteractionMetrics(props) {
    const [active, setActive] = useState(false)
    
    return (
        <Flex style={{marginLeft: 'auto'}}>
            <button
                style={{ cursor: 'pointer'}}
                onClick={() => setActive(!active)}
            >
                <Icon as={active ? AiFillHeart : AiOutlineHeart} w={7} h={7} color="red.400"
                    _hover={{ transform: "scale(1.2)", transition: "all 0.2s ease-in-out" }}
                />
            </button>
            <div style={{alignSelf: 'center'}}>
                13
            </div>
        </Flex>
    )
}

export default InteractionMetrics