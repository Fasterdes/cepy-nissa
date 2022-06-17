import React , {useRef} from 'react'

import { ContainerWeddingSection } from "../component/common/container"
import { Countdown } from "../component/home/countdown"
import { Hero } from "../component/home/hero"
import { Jadwal } from "../component/home/jadwal"
import { Surah } from "../component/home/surah"
import { Gallery } from "../component/home/gallery"
import { RSVP } from "../component/home/rsvp"
import { Ucapan } from "../component/home/ucapan"
import { Gift } from "../component/home/gift"

const Home = () => {
    const scrollToRef = useRef(null)

    return (
        <>
            <ContainerWeddingSection isBrown>
                <Hero />
            </ContainerWeddingSection>
            <ContainerWeddingSection> 
                <Surah/>
            </ContainerWeddingSection>
            <ContainerWeddingSection isBrown>
                <Jadwal/>
            </ContainerWeddingSection>
            <ContainerWeddingSection>
                <Countdown/>
            </ContainerWeddingSection>
            <ContainerWeddingSection isBrown>
                <Gallery/>
            </ContainerWeddingSection>
            <ContainerWeddingSection ref={scrollToRef}>
               <RSVP/>
            </ContainerWeddingSection>
            <ContainerWeddingSection isDark>
                <Ucapan/>
            </ContainerWeddingSection>
            <ContainerWeddingSection isBrown> 
                <Gift/>
            </ContainerWeddingSection>
        </>
    )
}

export { Home }