import React, { memo, createContext, useEffect, useRef, useState } from 'react'
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
    const [songIndex, setSongIndex] = useState(0)
    const [isRepeat, setRepeat] = useState(false)
    const getSongs = async () => {
        const response = await axios.get(`${apiUrl}/song`)
        setSong(response.data.song)
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

    const handleNext = async () => {
        if (songIndex === song.length - 1) {
            await setSongIndex(0)
            await setCurrentSong(song[0])

        } else {

            await setSongIndex(songIndex + 1)
            await setCurrentSong(song[songIndex + 1])
        }

        await playSong()

    }

    const handlePrev = async () => {
        if (songIndex === 0) {
            await setSongIndex(song.length - 1)
            await setCurrentSong(song[song.length - 1])
        } else {

            await setSongIndex(songIndex - 1)
            await setCurrentSong(song[songIndex - 1])
        }
        await playSong()

    }


    const handleEnded = async () => {
        if (isRepeat) {
            await playSong()
        } else {
            await handleNext()
        }
    }







    const nirContexData = { setRepeat, isRepeat, handlePrev, handleNext, songIndex, setSongIndex, audioRef, song, setSong, isPlaying, setPlaying, currentSong, setCurrentSong, timer, setTimer, volume, setVolume, playSong, pauseSong }

    return (
        <>
            <NirContext.Provider value={nirContexData}>
                <NirContainer song={song} />
                <NirController />
            </NirContext.Provider>
            <audio ref={audioRef} onEnded={handleEnded} onTimeUpdate={() => setTimer(audioRef.current.currentTime)} src={song[songIndex].url} />
        </>
    )
}

export default memo(NirLayout)
