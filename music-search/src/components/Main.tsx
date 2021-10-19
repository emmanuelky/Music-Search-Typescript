import { useState, useEffect } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Track } from '../typings'
import MyNavBar from './MyNavBar'

const searchEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const adeleSongs = "https://striveschool-api.herokuapp.com/api/deezer/search?q=adele"

const Main = () => {


    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Track[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        const handleDefaultArtist = async () => {

            const response = await fetch(query ? searchEndpoint + query : adeleSongs)

            if (response.ok) {

                const { data } = await response.json()
                setResults(data)

            }
        }
        handleDefaultArtist()

    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch(searchEndpoint + query)

        if (response.ok) {

            const { data } = await response.json()
            setResults(data)

        }

    }

    return (

        <div className=" bg-gray-800 h-100 w-100">

            <Container>
                <MyNavBar />
                <Row className="mt-5">
                    <Col xs={10} md={8} className="mx-auto my-5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="search" placeholder="Search for song, artist or album" value={query} onChange={handleChange} />
                        </Form>
                    </Col>
                    <Col xs={10} md={8} className="mx-auto my-3">
                        <Row>
                            {
                                results.map(track => (
                                    <Col xs={10} md={4}>
                                        <Link to={`details/${track.id}`}>
                                            <Card>
                                                <Card.Img variant="top" src={track.album.cover_medium} />
                                                <Card.Body>
                                                    <Card.Title>{track.title}</Card.Title>
                                                    <Card.Text>
                                                        {track.artist.name}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>)
}

export default Main