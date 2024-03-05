import axios from "axios";
import { useState } from "react";

const useMovieInfo = () => {
    const [ movie, setMovie ] = useState(null);
    const [ loading, setLoading ] = useState(true)
    const [ error,setError] = useState(null);

    const getMovie = (id) => {

        axios.get("http://localhost:3200/movies/"+id)
        .then(res => {
            setMovie(res.data)
        })
        .catch(e => {
            setError(e.message)
        })
        .finally(()=>{
            setLoading(false)
        })

    }

    const deleteMovie = ()=> {
        setLoading(true)
        setTimeout(()=>{
            axios.delete(`http://localhost:3200/movies/${movie?.id}`)
            .then(res => {
                window.alert('Movie deleted Successfully')
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(()=>{
                setLoading(false)
            })
        },2000)
    }

    return {
        movie,
        loading,
        error,
        getMovie,
        deleteMovie
    }

}

export default useMovieInfo;