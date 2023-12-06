import {IconButton} from '@mui/material'
import {PlayArrow} from '@mui/icons-material'

import s from './track.module.scss'

export const Track = (track) => {
    const {id, src, preview, title, artists, duration} = track

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
            <p>{duration}</p>
        </div>
    )
};
