import React, { createContext, useEffect, useRef, useState } from 'react'
import NirController from './NirController'
import NirContainer from './NirContainer'
import axios from 'axios'
import { apiUrl } from '../../contexts/constants'

export const NirContext = createContext()

const NirLayout = () => {

    const audioRef = useRef()
    const [song, setSong] = useState([{}])
    const [isPlaying, setPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState({})
    const [timer, setTimer] = useState(0)
    const [volume, setVolume] = useState(85)
    const getSongs = async () => {
        const response = await axios.get(`${apiUrl}/song`)
        setSong(response.data.song)
        console.log(response.data.song)
    }

    useEffect(() => {
        getSongs()
    }, [])

    const playSong = async () => {
        await audioRef.current.play()
        setPlaying(true)
    }
    const pauseSong = async () => {
        await audioRef.current.pause()
        setPlaying(false)
    }





    const nirContexData = { audioRef, song, setSong, isPlaying, setPlaying, currentSong, setCurrentSong, timer, setTimer, volume, setVolume, playSong, pauseSong }

    return (
        <NirContext.Provider value={nirContexData}>
            <NirContainer song={song} />
            <NirController />
            <audio ref={audioRef} src={currentSong.url} />
        </NirContext.Provider>
    )
}

export default NirLayout
