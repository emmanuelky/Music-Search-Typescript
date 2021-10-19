import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { TrackDetail } from "../typings"
import { Link } from 'react-router-dom'


import { Container, Row, Image, Col } from 'react-bootstrap'
import MyNavBar from "./MyNavBar"

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
            ? <Container className="  bg-gray-800 h-100 w-100 text-gray-200 ">
                <MyNavBar />
                <Row className='flex flex-col align-items-center my-5'>
                    <Col xs={10} >
                        <Image className="my-4 rounded-lg mx-auto" fluid src={trackDetails.album.cover_big} />
                        <h4 className="text-center">{trackDetails.title}</h4>
                        <h6 className="text-center">{trackDetails.artist.name}</h6>
                    </Col>
                </Row>
                <Link to='/'>

                    <button>Back Home</button>
                </Link>
            </Container>

            : null
    )
}