import { Col, Form, Modal, Row } from "react-bootstrap";
import MyButton from "../MyButton";


const MovieEditModal = ({movie,setMovie,handleUpdate,handleCancel}) => {
    return (
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
                <MyButton title={'Update'} variant="success" handleClick={handleUpdate} />
              </Col>
              <Col lg={2}>
                <MyButton title={'Cancel'} variant="danger" handleClick={handleCancel} />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
    )
}
export default MovieEditModal;