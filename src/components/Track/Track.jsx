import {IconButton} from '@mui/material'
import {PlayArrow} from '@mui/icons-material'
import secondsToMMSS from "../../pages/main-page/secondsToMMSS.js";

import s from './track.module.scss'

export const Track = (track) => {
    const {id, src, preview, title, artists, duration} = track

    const formattedDuration = secondsToMMSS(duration)

    return (
        <div className={s.track}>
            <IconButton>
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
