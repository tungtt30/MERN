import React from 'react'
import { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Col from "react-bootstrap/Col"








const Nir = (props) => {
    console.log(props)
    const [isPlaying, setPlaying] = useState(false)

    const audioRef = useRef();
    const buttonRef = useRef();

    



    const handleClick = (e) => {
        audioRef.current.play()
        setPlaying(true)
    }

    return (
        <>
            <Col>
               
                    <Card >
                        <Card.Img variant='top' src={props.image} />
                        <Card.Header>
                            {props.name}
                        </Card.Header>
                        <Card.Body>
                            {props.singer}
                        </Card.Body>
                        <audio ref={audioRef} src={props.url} ></audio>
                        <Button ref={buttonRef} onClick={handleClick}>Play</Button>
                    </Card>
             
            </Col>

        </>
    )
}

export default Nir