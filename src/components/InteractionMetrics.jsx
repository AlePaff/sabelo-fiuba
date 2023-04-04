import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Icon, Text, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { db } from '../firebaseSetup'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";


function InteractionMetrics({ id_card }) {
    const [active, setActive] = useState(false)

    // const likesRef = collection(db, 'likes');
    // addDoc(likesRef, { id: id_card })
    // const votoRef = doc(db, 'likes')
    //una alternativa
    // const query = likesRef.where('id', '==', id_card);



    const addDocument = async () => {
        // Obtiene el documento correspondiente a la tarjeta actual
        const cardRef = doc(db, "cards", id_card);
        const cardDoc = await getDoc(cardRef);

        // Obtiene el número actual de "Me gusta" y lo actualiza en la base de datos
        const likes = cardDoc.data().likes + 1;
        await updateDoc(cardRef, { likes: increment(1) });
    }

    // const [votos] = useCollectionData(query, { idField: 'id' });

    const handleClick = () => {
        setActive(!active)
        // console.log("asd")
        addDocument()
    }

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