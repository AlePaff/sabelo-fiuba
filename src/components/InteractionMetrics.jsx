import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { db } from '../firebaseSetup'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";


function InteractionMetrics({ id_card }) {
    const [active, setActive] = useState(false);
    const [likes, setLikes] = useState(0);
    
    useEffect(() => {
        const likedCards = JSON.parse(localStorage.getItem('likedCards') || '{}');
        if (likedCards[id_card]) {
            setActive(true);
            setLikes(likedCards[id_card]);
        }
    }, [id_card]);

    const handleClick = async () => {
        if (active) {
            setActive(false);
            setLikes(likes - 1);
        } else {
            setActive(true);
            setLikes(likes + 1);
        }

        const cardRef = doc(db, 'cards', id_card);
        const cardDoc = await getDoc(cardRef);

        if (cardDoc.exists()) {
            const cardData = cardDoc.data();
            const newLikes = active ? cardData.likes - 1 : cardData.likes + 1;

            await updateDoc(cardRef, { likes: newLikes });
        } else {
            await setDoc(cardRef, { likes: 1 });
        }

        const likedCards = JSON.parse(localStorage.getItem('likedCards') || '{}');
        likedCards[id_card] = likes;
        if (active) {
            delete likedCards[id_card];
        }
        localStorage.setItem('likedCards', JSON.stringify(likedCards));
    };



    return (
        <Flex style={{ marginLeft: 'auto' }}>
            <button
                style={{ cursor: 'pointer' }}
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