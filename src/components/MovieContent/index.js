import { Col, Container, Row } from "react-bootstrap";
import MyButton from "../MyButton";
import { useState } from "react";


const MovieContent = ({movie,handleEdit,handleDelete,xyz,abc}) => {

    if (movie != null) {
        return (
        <Container>
        <p> {movie.title}</p>
        <p> {movie.description}</p>
        <p> {movie.duration}</p>
        <Row>
          <Col lg={1}>
            <MyButton title={'Edit'} variant="success" handleClick={handleEdit}/>
          </Col>
          <Col lg={1}>
               <MyButton title={'Delete'} variant="danger" handleClick={handleDelete} />
          </Col>
        </Row>
        </Container>)
      } else {
        <></>;
      }
}

export default MovieContent;