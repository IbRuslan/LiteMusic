import tracksList from './../../assets/tracksList.js'
import {Track} from "../../components/Track/Track.jsx";
import {Input} from '@mui/material'

import s from './mainPage.module.scss'
import {useState} from "react";

const runSearch = (query) => {
    if(query.trim() === '') {
        return tracksList
    }

    const loverCaseQuery = query.toLowerCase()

    return tracksList.filter(track => track.title.toLowerCase().includes(loverCaseQuery) || track.artists.toLowerCase().includes(loverCaseQuery))
}

export const MainPage = () => {

    const [tracks, setTracks] = useState(tracksList)

    const onChangeHandler = (e) => {
        const result = runSearch(e.target.value)
        setTracks(result)
    }

    return (
        <div className={s.search}>
            <Input className={s.input} placeholder={'Поиск треков'} onChange={onChangeHandler} />
            <div className={s.list}>
                {tracks.map(track => <Track key={track.id} {...track}/>)}
            </div>
        </div>
    );
};
