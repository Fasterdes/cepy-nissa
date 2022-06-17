import tw from "twin.macro";
import React , { useState , useEffect , useRef} from "react";

import CountDownImg from '../../img/countdown.jpeg'

import { ContainerWeddingSpace } from "../common/container";
import { HeadingTwo, TextParagraphOne, TextParagraphTwo } from "../common/typography";

const CountdownImage = tw.img`border border-blue rounded-2xl`
const HeadingCountdownWrapper = tw.div`space-y-5`
const CountdownWrapperArea = tw.div`flex justify-around`
const CountdownBoxArea = tw.div`bg-brown-dark space-y-1 px-5 py-2 rounded-xl`


const Countdown = () => { 
    const [timerDays , setTimerDays] = useState('00')
    const [timerHours , setTimerHours] = useState('00')
    const [timerMinutes , setTimerMinutes] = useState('00')
    const [timerSecond , setTimerSecond] = useState('00')

    let interval = useRef()

    const Timer = () => { 
        const countDownDate = new Date('June 24, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0) { 
                clearInterval(interval)
            }else { 
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecond(seconds)
            }
        }, 1000);
    }

    useEffect(() => { 
        Timer()
        return () => { 
            clearInterval(interval.current )
        }
    })

    return ( 
        <ContainerWeddingSpace txtCenter> 
            <CountdownImage src={CountDownImg} />
            <HeadingCountdownWrapper>
                <HeadingTwo>
                    menuju hari bahagia
                </HeadingTwo>
                <TextParagraphOne> 
                “Siang dan malam berganti begitu cepat, di antara saat-saat mendebarkan yang belum pernah kami rasakan sebelumnya. Kami nantikan kehadiran Bapak/Ibu/Sahabat, untuk menjadi saksi ikrar janji suci kami di hari yang bahagia.”
                </TextParagraphOne>
            </HeadingCountdownWrapper>
            <CountdownWrapperArea>
                <CountdownBoxArea>
                    <HeadingTwo isLora>{timerDays}</HeadingTwo>
                    <TextParagraphTwo isWhite>Hari</TextParagraphTwo>
                </CountdownBoxArea>
                <CountdownBoxArea>
                    <HeadingTwo isLora>{timerHours}</HeadingTwo>
                    <TextParagraphTwo isWhite>Jam</TextParagraphTwo>
                </CountdownBoxArea>
                <CountdownBoxArea>
                    <HeadingTwo isLora>{timerMinutes}</HeadingTwo>
                    <TextParagraphTwo isWhite>Menit</TextParagraphTwo>
                </CountdownBoxArea>
                <CountdownBoxArea>
                    <HeadingTwo isLora>{timerSecond}</HeadingTwo>
                    <TextParagraphTwo isWhite>Detik</TextParagraphTwo>
                </CountdownBoxArea>
            </CountdownWrapperArea>
        </ContainerWeddingSpace>
    )
}

export {Countdown}