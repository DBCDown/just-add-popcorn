import {useEffect, useState} from 'react'
import queryString from 'query-string'
import axios from "axios";

const useMovies = (endpoint, params) => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    const getMovies = async () => {
        try {
            const {data} = (await axios.get(`https://yts.mx/api/v2/${endpoint}.json/?${queryString.stringify(params)}`)).data
            setMovie(data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])


    return [movie, loading]
}

export default useMovies