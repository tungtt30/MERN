import React, { useState, useEffect } from 'react'
import Nir from './Nir'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'
import Row from "react-bootstrap/Row"
import NirController from './NirController'


const NirLayout = () => {

    const [song, setSong] = useState([])

    const getSongs = async () => {
        const response = await axios.get(`${apiUrl}/song`)
        setSong(response.data.song)


    }

    useEffect(() => {
        getSongs()

    }, [])




    return (
        <>
            <Row className="row-cols-1 row-cols-md-5 mx-auto mt-3">
                {song.map((song) => {
                    return <Nir key={song._id} name={song.name} singer={song.singer} url={song.url} image={song.image} />
                })}
            </Row>
            <NirController />
        </>
    )




}

export default NirLayout
