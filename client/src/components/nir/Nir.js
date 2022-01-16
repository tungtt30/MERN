import React from 'react'
import { useRef } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import appleseed from './thumb/appleseed.jpg'
import ashe from './thumb/ashe.jpg'
import attack from './thumb/attack.jpg'
import daokhongnguoi from './thumb/daokhongnguoi.jpg'
import fukashagi from './thumb/fukashagi.jpg'
import motbuocxaxoi from './thumb/motbuocxaxoi.jpg'
import tabun from './thumb/tabun.jpg'
import track from './thumb/track.jpg'
import vogelimkafig from './thumb/vogelimkafig.jpg'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import tabunn from "./music/tabun.m4a"




const Nir = () => {

    const songs = [
        {
            name: "Apple seed",
            singer: "Unknow",
            path: "./music/Appleseed.mp3",
            image: appleseed,
        },
        {
            name: "Attack on Titan",
            singer: "Unknow",
            path: "./music/aot.mp3",
            image: attack,
        },
        {
            name: "Ashes",
            singer: "Gemie",
            path: "./music/a.m4a",
            image: ashe,
        },
        {
            name: "Đảo không người",
            singer: "Nhậm Nhiên",
            path: "./music/dkn.m4a",
            image: daokhongnguoi,
        },
        {
            name: "Fukashigi no Karte",
            singer: "Ashami Seto",
            path: "./music/fnk.flac",
            image: fukashagi,
        },
        {
            name: "Một bước xa xôi",
            singer: "Nhậm Nhiên",
            path: "./music/mbxx.flac",
            image: motbuocxaxoi,
        },
        {
            name: "Tabun (たぶん)",
            singer: "YOASOBI",
            path: "./music/tabun.m4a",
            image: tabun,
        },
        {
            name: "Vogel im Kafig",
            singer: "Gemie",
            path: "./music/vgk.mp3",
            image: vogelimkafig,
        },
        {
            name: "あの夢をなぞって",
            singer: "YOASOBI",
            path: "./music/tracking.mp3",
            image: track,
        },
    ]
    const audioRef = useRef();

    const handleClick = () => {
        audioRef.current.play()
    }
    


    return (
        <>
            <Row className="row-cols-1 row-cols-md-4 g-4 mx-auto mt-3">
                {songs.map(song => (
                    <Col className='my-2'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={song.image} />
                            <Card.Body>
                                <Card.Title>{song.name}</Card.Title>
                                <Card.Text>
                                    {song.singer}
                                </Card.Text>
                                <audio
                                    ref={audioRef}
                                    src={tabunn}
                                />
                                <Button variant="primary" onClick={handleClick}>Play</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Nir