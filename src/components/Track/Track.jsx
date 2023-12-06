import {useContext} from "react";
import {AudioContext} from "../../context/AudioContext.jsx";
import {IconButton} from '@mui/material'
import {PlayArrow} from '@mui/icons-material'
import secondsToMMSS from "../../utils/secondsToMMSS.js";

import s from './track.module.scss'

export const Track = (track) => {
    const {id, src, preview, title, artists, duration} = track

    const {toggleAutoHandler} = useContext(AudioContext)

    const formattedDuration = secondsToMMSS(duration)

    return (
        <div className={s.track}>
            <IconButton onClick={() => toggleAutoHandler(track)}>
                <PlayArrow/>
            </IconButton>
            <img className={s.preview} src={preview} alt="preview"/>
            <div className={s.credits}>
                <b>{title}</b>
                <b>{artists}</b>
            </div>
            <p>{formattedDuration}</p>
        </div>
    )
};
