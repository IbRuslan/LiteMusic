import {useContext} from "react";
import {AudioContext} from "../../context/AudioContext.jsx";
import {IconButton, Slider} from '@mui/material'
import {Pause, PlayArrow} from '@mui/icons-material'
import secondsToMMSS from "../../utils/secondsToMMSS.js";

import s from './playbar.module.scss'

export const Playbar = () => {
    const {audio, current, toggleAutoHandler, isPlaying} = useContext(AudioContext)

    const {title, artists, preview, duration} = current

    const formattedDuration = secondsToMMSS(duration)

    return (
        <div className={s.playbar}>
            <img className={s.preview} src={preview} alt="preview"/>
            <IconButton onClick={()=> toggleAutoHandler(current)}>
                {isPlaying ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <div className={s.credits}>
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <div className={s.slider}>
                <p>00:00</p>
                <Slider step={1} min={0} max={100} />
                <p>{formattedDuration}</p>
            </div>
        </div>
    );
};
