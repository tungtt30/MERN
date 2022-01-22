import React, { useContext, memo } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import { NirContext } from "./NirLayout"
import Spinner from 'react-bootstrap/esm/Spinner'

const Nir = (props) => {

    let btnSpinner = null
    let btnText = 'Play'

    console.log('nir re render')

    const { setCurrentSong, playSong, currentSong, isPlaying } = useContext(NirContext)

    const handleClick = async () => {
        await setCurrentSong(props)
        await playSong()
    }

    if (currentSong.url === props.url && isPlaying) {
        btnSpinner = (
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        )
        btnText = ' Playing '
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
                    <Button variant='outline-danger' onClick={handleClick}>
                        {btnSpinner}
                        {btnText}
                    </Button>
                </Card>
            </Col>

        </>
    )
}

export default memo(Nir) 