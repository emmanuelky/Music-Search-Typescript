import { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Track } from '../typings'

const searchEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

export default function Main() {


    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Track[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch(searchEndpoint + query)

        if (response.ok) {

            const { data } = await response.json()
            setResults(data)

        }

    }

    return <Container>
        <Row>
            <Col xs={10} md={8} className="mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Control type="search" value={query} onChange={handleChange} />
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
}