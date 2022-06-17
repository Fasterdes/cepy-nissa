import React  from 'react' 
import ReactAudioPlayer from 'react-audio-player'
import bgm from '../music/audio/bgm.mp3'
import { useState } from 'react'

const PlayMusic = () => { 
    const isPlaying = useState(true)
    return ( 
       <> 
            <ReactAudioPlayer src={bgm} autoPlay={isPlaying} loop={true} />
       </>
    )
}

export { PlayMusic }