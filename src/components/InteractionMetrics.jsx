import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { db } from '../firebaseSetup'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, increment, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";


function InteractionMetrics({ id_card }) {
    const [active, setActive] = useState(false)
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        //obtiene los likes de la base de datos
        //se actualiza cada vez que cambia id_card
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
        }
    }, [id_card]);      //cada vez que se actualiza el id_card


    const handleClick = async () => {
        // toggle active
        setActive(!active);

        const cardRef = doc(db, 'cards', id_card);
        const cardDoc = await getDoc(cardRef);

        //si existe en la base de datos, se actualiza, sino se crea
        if (cardDoc.exists()) {
            const cardData = cardDoc.data();
            var newLikes = active ? cardData.likes - 1 : cardData.likes + 1;
            if (newLikes < 0) {
                newLikes = 0;      //si se llega a un número negativo, se pone en 0 (no debería pasar nunca)
                await updateDoc(cardRef, { likes: 0 });
            }
            await updateDoc(cardRef, { likes: active ? increment(-1) : increment(1) });

            setTotalLikes(newLikes);
        } else {
            await setDoc(cardRef, { likes: 1 });
            setTotalLikes(1);
        }

        const likedCards = JSON.parse(sessionStorage.getItem('likedCards') || '{}');
        likedCards[id_card] = !active;
        if (active) {
            delete likedCards[id_card];
        }
        sessionStorage.setItem('likedCards', JSON.stringify(likedCards));
    };



    return (
        <Flex ml={'auto'}>

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
            <Text fontSize='xl' fontWeight='bold'>
                {totalLikes}
            </Text>
        </Flex>
    )
}

export default InteractionMetrics