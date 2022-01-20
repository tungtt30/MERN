import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import { NirContext } from "./NirLayout"

const Nir = (props) => {

    const { setCurrentSong, playSong } = useContext(NirContext)

    const handleClick = () => {
        playSong()
        setCurrentSong(props)
    }

    return (
        <>
            <Col>
                <Card className='mb-5 cardClass' >
                    <Card.Img variant='top' className='card-image' src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.singer}</Card.Text>
                    </Card.Body>
                    <Button variant='danger' onClick={handleClick}>Play</Button>
                </Card>
            </Col>

        </>
    )
}

export default Nir