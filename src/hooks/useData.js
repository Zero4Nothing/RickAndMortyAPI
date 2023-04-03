import { useEffect, useState } from "react";

const END_POINT = "https://rickandmortyapi.com/api/"
export const useData = ({ keyword, name, status, gender }) => {
    const [info, setInfo] = useState([]);
    const [data, setData] = useState([]);


    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setInfo(data.info)
        setData(data.results)
    }


    const prevPage = () => {
        getData(info.prev)
    }
    const nextPage = () => {
        getData(info.next)
    }

    useEffect(() => {
        getData(`${END_POINT}${keyword}`)
    }, [])

    useEffect(() => {
        console.log("Renderizando")
        getData(`https://rickandmortyapi.com/api/${keyword}/?${name && `name=${name}`}&${status && `status=${status}`}&${gender && `gender=${gender}`}`)
    }, [name, status, gender,keyword])


    return { info, data, prevPage, nextPage }

}