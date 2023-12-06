import {useContext, useEffect, useState} from "react";
import {AudioContext} from "../../context/AudioContext.jsx";
import {IconButton, Slider} from '@mui/material'
import {Pause, PlayArrow} from '@mui/icons-material'
import secondsToMMSS from "../../utils/secondsToMMSS.js";

import s from './playbar.module.scss'

const TimeControls = () => {

    const {audio, current} = useContext(AudioContext)

    const [currentTime, setCurrentTime] = useState(0)

    const sliderCurrentTime = Math.round((currentTime / current.duration) * 100)

    const formattedCurrentTime = secondsToMMSS(currentTime)

    const formattedDuration = secondsToMMSS(current.duration)

    const onChangeCurrentTime = (_, value) => {
        const time = Math.round((value / 100) * current.duration)
        setCurrentTime(time)
        audio.currentTime = time
    }

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(audio.currentTime)
        }, 500)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    return (
        <>
            <p>{formattedCurrentTime}</p>
            <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={onChangeCurrentTime}/>
            <p>{formattedDuration}</p>
        </>
    )
}

export const Playbar = () => {
    const {current, toggleAutoHandler, isPlaying} = useContext(AudioContext)

    const {title, artists, preview} = current


    return (
        <div className={s.playbar}>
            <img className={s.preview} src={preview} alt="preview"/>
            <IconButton onClick={() => toggleAutoHandler(current)}>
                {isPlaying ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <div className={s.credits}>
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <div className={s.slider}>
                <TimeControls/>
            </div>
        </div>
    );
};
