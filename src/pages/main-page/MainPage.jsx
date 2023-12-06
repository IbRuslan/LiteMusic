import tracksList from './../../assets/tracksList.js'

import s from './mainPage.module.scss'
import {Track} from "../../components/Track/Track.jsx";

export const MainPage = () => {
    return (
        <div className={s.search}>
            <div className={s.list}>
                {tracksList.map((track) => <Track key={track.id} {...track}/>)}
            </div>
        </div>
    );
};
