import React from 'react'
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




const Nir = () => {

    const songs =  [
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

   
   
   





    return (
        <>
            {songs.map(song => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={song.image} />
                    <Card.Body>
                        <Card.Title>{song.name}</Card.Title>
                        <Card.Text>
                            {song.singer}
                        </Card.Text>
                        <Button variant="primary">Play</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default Nir