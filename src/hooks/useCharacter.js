import { useState } from "react";
import { useEffect } from "react";

export const useCharacter=(id)=>{
    const [character, setCharacter] = useState(null);



    const getCharacter = async (id) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
    }

    useEffect(() => {
        if (!id) return
        getCharacter(id)
    }, [id])


    return { character }

} 