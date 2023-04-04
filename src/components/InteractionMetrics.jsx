import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { db } from '../firebaseSetup'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";


function InteractionMetrics({ id_card }) {
    const [active, setActive] = useState(false)
    const [likes, setLikes] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        //obtiene los likes de la base de datos
        const fetchLikes = async () => {
            const cardRef = doc(db, 'cards', id_card);
            const cardDoc = await getDoc(cardRef);

            if (cardDoc.exists()) {
                const cardData = cardDoc.data();
                setTotalLikes(cardData.likes || 0);
            }
        };

        fetchLikes();
    }, [id_card]);

    useEffect(() => {
        //obtiene los likes del local storage para impedir que se pueda votar varias veces al refrescar la página
        const likedCards = JSON.parse(sessionStorage.getItem('likedCards') || '{}');      //localStorage no expira en cambio sessionStorage cuando se resetea el navegador
        if (likedCards[id_card]) {
            setActive(true);
            setLikes(likedCards[id_card]);
        }
    }, [id_card]);      //cada vez que se actualiza el id_card


    const handleClick = async () => {
        console.log("likes", likes, "totalLikes", totalLikes, "active", active, "local", JSON.parse(sessionStorage.getItem('likedCards') || '{}'));

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
            setTotalLikes(newLikes);
        } else {
            await setDoc(cardRef, { likes: 1 });
            setTotalLikes(1);
        }

        const likedCards = JSON.parse(sessionStorage.getItem('likedCards') || '{}');
        likedCards[id_card] = !active;
        console.log("-----", "likedCards", likedCards, "id card", id_card);
        if (active) {
            delete likedCards[id_card];
        }
        sessionStorage.setItem('likedCards', JSON.stringify(likedCards));
    };



    return (
        <Flex style={{ marginLeft: 'auto' }}>
            {likes} |
            {totalLikes} {totalLikes === 1 ? 'like' : 'likes'}

            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >
                <Icon
                    as={active ? AiFillHeart : AiOutlineHeart}
                    w={7}
                    h={7}
                    color="red.400"
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