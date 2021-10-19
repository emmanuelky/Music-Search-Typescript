import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { TrackDetail } from "../typings"

import { Container, Row, Image, Col } from 'react-bootstrap'

interface DetailPageParams {
    id: string
}


export default function DetailPage() {

    const id = parseInt(useParams<DetailPageParams>().id)

    const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null)

    useEffect(() => {
        (async () => {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + id)

            if (!response.ok) return

            const data = await response.json()
            setTrackDetails(data)
        })()
    }, [])

    return (
        trackDetails
            ? <Container>
                <Row>
                    <Col xs={10}>
                        <Image fluid src={trackDetails.album.cover_big} />
                        <h4>{trackDetails.title}</h4>
                        <h6>{trackDetails.artist.name}</h6>
                    </Col>
                </Row>
            </Container>

            : null
    )
}