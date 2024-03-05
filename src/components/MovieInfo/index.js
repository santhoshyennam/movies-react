import { useParams } from "react-router-dom";
import useMovieInfo from "./hook";
import { useEffect } from "react";
import Loading from "../Loading";
import Error from '../Error';
import { Button } from "react-bootstrap";

const MovieInfo = () => {

    let { id } = useParams();
    const { movie,loading,error, getMovie, deleteMovie } = useMovieInfo()

    let dummyMovie = {
        "id": 10,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "description": "A young hobbit, Frodo, must destroy a powerful ring to save Middle-earth.",
        "releaseDate": "2001-12-19T00:00:00.000Z",
        "duration": 183,
        "imageUrl": "10.jpeg",
        "cost": 73.39,
        "createdAt": "2023-11-10T01:46:06.000Z",
        "updatedAt": "2023-11-10T23:54:52.000Z",
        "genre_id": 5,
        "language_id": 1
    }

    useEffect(()=>{
        getMovie(id)
    },[])

    useEffect(()=>{
        if(movie != null)
        console.log(movie)
    },[movie])

    const getTitle = () => {
        if(movie != null) {
          return  <p> {movie.title}</p> 
        }
        else {
            <></>
        }
    }


    return (
       <>
        { loading && <Loading/>}
        {
           getTitle()
        }
        { movie != null && <Button className="danger" onClick={deleteMovie}>Delete</Button>}
        { error != null && <Error message={error} />}
       </>        
    )
}

export default MovieInfo;