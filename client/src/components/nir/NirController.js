import React, { useContext, useEffect } from 'react'
import { useRef } from 'react'
import { NirContext } from './NirLayout'

const NirController = () => {


    const { audioRef, currentSong, isPlaying, timer, setTimer, volume, setVolume, playSong, pauseSong } = useContext(NirContext)
    const progressRef = useRef()
    const volumeRef = useRef()

 



    const handleInput = () => {
        setVolume(volumeRef.current.value / 100)
    }

    const handleChange = () => {
        setTimer(progressRef.current.value)
    }
    const handleClick = () => {
        if (isPlaying) {
            pauseSong()
        } else {
            playSong()
        }
    }


    var btnClassName = isPlaying ? 'fas fa-pause' : 'fas fa-play'



    return (
        <div>
            <div className='dashboard'>
                <header>
                    <h4 className='nir-controller-singer'>{currentSong.singer}</h4>
                    <h2 className='nir-controller-song'>{currentSong.name}</h2>
                </header>
                <div className="cd">
                    <div className="cd-thumb" style={{ backgroundImage: `url(${currentSong.image})` }}>

                    </div>
                </div>
                <div className="control">
                    <div className="btn btn-repeat">
                        <i className="fas fa-redo"></i>
                    </div>
                    <div className="btn btn-prev">
                        <i className="fas fa-step-backward"></i>
                    </div>
                    <div className="btn btn-toggle-play" onClick={handleClick}>
                        <i className={btnClassName}></i>

                    </div>
                    <div className="btn btn-next">
                        <i className="fas fa-step-forward"></i>
                    </div>
                    <div className="btn btn-random">
                        <i className="fas fa-random"></i>
                    </div>
                </div>
                <div>
                    <input ref={progressRef} onChange={handleChange} className="progress" type="range" />
                    <input ref={volumeRef} className="volume" onInput={handleInput} type="range" />
                </div>
            </div>
        </div>
    )
}

export default NirController
