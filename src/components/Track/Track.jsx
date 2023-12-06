import {useContext} from "react";
import {AudioContext} from "../../context/AudioContext.jsx";
import {IconButton} from '@mui/material'
import {PlayArrow, Pause} from '@mui/icons-material'
import secondsToMMSS from "../../utils/secondsToMMSS.js";
import cn from 'classnames'

import s from './track.module.scss'

export const Track = (track) => {
    const {id, src, preview, title, artists, duration} = track

    const {toggleAutoHandler, current, isPlaying} = useContext(AudioContext)

    const isCurrentTrack = current.id === track.id

    const formattedDuration = secondsToMMSS(duration)

    return (
        <div className={cn(s.track, isCurrentTrack && s.playing)}>
            <IconButton onClick={() => toggleAutoHandler(track)}>
                {isCurrentTrack && isPlaying ? <Pause/> : <PlayArrow/>}
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
