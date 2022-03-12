import React, { useState, useEffect } from 'react'
import style from './Test2.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progress = ({ props }) => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const time = setInterval(() => {
            setProgress((oldProgress) => {
                console.log(oldProgress)
              return  oldProgress + props / 100
            
            })
        }, 1000)

        return () => {
            clearInterval(time)
        }
    }, [])



    return (
        <ProgressBar variant="warning" now={progress} />
    )
}


export default Progress