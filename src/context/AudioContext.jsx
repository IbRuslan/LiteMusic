import {createContext, useState} from "react";
import tracksList from '../assets/tracksList.js'


const audio = new Audio()
export const AudioContext = createContext({})

export const AudioProvider = ({children}) => {
    const [current, setCurrent] = useState(tracksList[0])
    const [isPlaying, setIsPlaying] = useState(false)

    const toggleAutoHandler = (track) => {
        if(current.id !== track.id) {
            setCurrent(track)
            setIsPlaying(true)

            audio.src = track.src
            audio.currentTime = 0
            audio.play()

            return
        }

        if(isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play()
            setIsPlaying(true)
        }
    }

    const value = {audio, current, isPlaying, toggleAutoHandler}

    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>

}