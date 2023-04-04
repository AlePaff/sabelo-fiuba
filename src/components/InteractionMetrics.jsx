import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { db } from '../firebaseSetup'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";


function InteractionMetrics({ id_card }) {
    const [active, setActive] = useState(false);
    
    const handleClick = async () => {
        setActive(!active);
      
        const cardRef = doc(db, 'cards', id_card);
        const cardDoc = await getDoc(cardRef);
      
        if (cardDoc.exists()) {
          const cardData = cardDoc.data();
          const likes = cardData.likes ? cardData.likes + 1 : 1;
      
          await updateDoc(cardRef, { likes });
        } else {
          
            await setDoc(cardRef, { likes: 1 });

        }
      };
      


    return (
        <Flex style={{ marginLeft: 'auto' }}>
            <button
                style={{ cursor: 'pointer' }}
                // onClick={() => setActive(!active)}
                onClick={handleClick}
            >
                <Icon as={active ? AiFillHeart : AiOutlineHeart} w={7} h={7} color="red.400"
                    _hover={{ transform: "scale(1.2)", transition: "all 0.2s ease-in-out" }}
                />
            </button>
            {/* <div style={{ alignSelf: 'center' }}>
                {votos && votos.length}
            </div> */}
        </Flex>
    )
}

export default InteractionMetrics