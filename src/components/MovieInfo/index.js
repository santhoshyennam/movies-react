import { useParams } from "react-router-dom";
import useMovieInfo from "./hook";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Error from "../Error";
import {Container} from "react-bootstrap";
import MovieContent from "../MovieContent";
import MovieEditModal from "../MovieEditModal";

const MovieInfo = () => {
  let { id } = useParams();
  const { movie, loading, error, getMovie, deleteMovie,setMovie,updateMovie } = useMovieInfo();

  const [showEditModal, setShowEditModal] = useState(false);

  let dummyMovie = {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A young hobbit, Frodo, must destroy a powerful ring to save Middle-earth.",
    releaseDate: "2001-12-19T00:00:00.000Z",
    duration: 183,
    imageUrl: "10.jpeg",
    cost: 73.39,
    createdAt: "2023-11-10T01:46:06.000Z",
    updatedAt: "2023-11-10T23:54:52.000Z",
    genre_id: 5,
    language_id: 1,
  };

  const enableShowEditModal = () => {
    setShowEditModal(true)
  }

  const disableShowEditModal = () => {
    setShowEditModal(false)
  }

  useEffect(() => {
    getMovie(id);
  }, []);

  useEffect(() => {
    if (movie != null) console.log(movie);
  }, [movie]);

  return (
    <Container>
      {loading && <Loading />}
      <MovieContent movie={movie} handleEdit={enableShowEditModal} />
      {error != null && <Error message={error} />}
      {showEditModal && <MovieEditModal movie={movie} setMovie={setMovie} handleUpdate={updateMovie} handleCancel={disableShowEditModal} />}
    </Container>
  );
};
export default MovieInfo;
