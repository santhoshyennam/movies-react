import { useParams } from "react-router-dom";
import useMovieInfo from "./hook";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Error from "../Error";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

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

  useEffect(() => {
    getMovie(id);
  }, []);

  useEffect(() => {
    if (movie != null) console.log(movie);
  }, [movie]);

  const getContent = () => {
    if (movie != null) {
      return (
      <div>
      <p> {movie.title}</p>
      <p> {movie.description}</p>
      <p> {movie.duration}</p>
      </div>)
    } else {
      <></>;
    }
  };

  return (
    <Container>
      {loading && <Loading />}
      {getContent()}
      {movie != null && (
        <Row>
          <Col lg={1}>
            <Button
              className="danger"
              onClick={() => {
                setShowEditModal(true);
              }}
            >
              Edit
            </Button>
          </Col>
          <Col lg={1}>
            <Button className="danger" onClick={deleteMovie}>
              Delete
            </Button>
          </Col>
        </Row>
      )}
      {error != null && <Error message={error} />}

      {showEditModal && (
        <Modal
          size="lg"
          show={true}
          onHide={() => {}}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Movie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-4">
              <Form.Control size="lg" type="text" placeholder="Title" value={movie.title} onChange={(e)=> {
                const newMovie = {...movie};
                newMovie.title = e.target.value
                setMovie(newMovie)
              }} />
            </Row>

            <Row className="mb-4">
              <Form.Control size="lg" type="text" placeholder="Duration" value={movie.duration} onChange={(e)=> {
                const newMovie = {...movie};
                newMovie.duration = e.target.value
                setMovie(newMovie)
              }} />
            </Row>

            <Row className="mb-4">
              <Form.Control as="textarea" rows={3} value={movie.description} onChange={(e)=>{
                const newMovie = {...movie};
                newMovie.description = e.target.value
                setMovie(newMovie)
              }} />
            </Row>
            <Row>
              <Col lg={2}>
                <Button variant="success" onClick={updateMovie}>Update</Button>
              </Col>
              <Col lg={2}>
                <Button
                  variant="danger"
                  onClick={() => {
                    setShowEditModal(false);
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default MovieInfo;
