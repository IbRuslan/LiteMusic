import {MainPage} from "./pages/main-page/MainPage.jsx";
import {Playbar} from './components/Playbar/Playbar.jsx'

import s from './global.module.scss'

const App = () => {
    return (
        <div className={s.wrapper}>
            <MainPage/>
            <Playbar/>
        </div>
    )
}

export default App
