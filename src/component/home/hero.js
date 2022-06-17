import tw from 'twin.macro';

import HeroImg from '../../img/hero.jpeg';

import {HeadingOne, TextParagraphTwo } from '../common/typography';

const MainHeroArea = tw.section`flex flex-col items-center justify-center space-y-6`
const ImageHero = tw.img`rounded-full border border-blue h-[500px]`
const TextHeroArea = tw.div`space-y-5 text-center`

const Hero = () => {
    return (
        <>
            <MainHeroArea>
                <ImageHero alt='Hero jpeg of cepy & nissa - intimate wedding' src={HeroImg} />
                <TextHeroArea>
                    <HeadingOne>
                        cepy & nissa
                    </HeadingOne>
                    <TextParagraphTwo>
                        24 Juni 2022
                    </TextParagraphTwo>
                </TextHeroArea>
            </MainHeroArea>
        </>
    )
}

export { Hero }