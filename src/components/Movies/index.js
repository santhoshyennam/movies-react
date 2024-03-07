import Container from 'react-bootstrap/Container';
import './index.css'
import { useEffect } from 'react';
import Loading from '../Loading';
import Error from '../Error';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useMovies from './hook';
import Movie from '../Movie';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () => {

    const { data, loading, error, getData } = useMovies()
    useEffect(()=> {
        setTimeout(()=> {
            getData()
        },1000)
    },[])
    return (
        <>
        <Container className='container'>
        <h1>Movies</h1>
        <Link variant="success" to={"create-movie"} >Create Movie</Link>
        { loading && <Loading/>}
        <Row>
        { 
            data.map((movie)=> {
                return (
                    <Col lg={3} xs={6} className='movieCol'>
                        <Movie movie={movie} />
                    </Col>
                )
            })
        }
        </Row>
        { error !== null && <Error message={error} />}
        </Container>
        </>
    )
}

export default Movies;

function add(a,b) {

}