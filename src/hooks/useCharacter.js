import { useState, useEffect } from "react";

export const useCharacter = (id) => {
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getCharacter = async (id) => {
        setIsLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json();
        setCharacter(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!id) return
        getCharacter(id)
    }, [id])

    return { character, isLoading }
};