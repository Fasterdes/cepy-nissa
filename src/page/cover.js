import { Link } from "react-router-dom";
import tw from "twin.macro";
import { Button } from "../component/common/button";

import { MainWeddingArea, ContainerWedding, ContainerWeddingWrapper, ContainerWeddingSpace, ContainerWeddingSection } from "../component/common/container";
import { HeadingOne, TextParagraphTwo } from "../component/common/typography";
import HeroCover from '../img/hero.jpeg'

const MainCoverArea = tw.section`flex flex-col items-center justify-center`
const MainCoverWrapper = tw(ContainerWeddingWrapper)`h-screen`
const TextCoverArea = tw.div`space-y-5 text-center`
const ImageCover = tw.img`rounded-full border border-blue h-[500px]`
const ButtonContainer = tw.div`text-center py-4`

const Cover = () => {
    return (
        <MainWeddingArea>
            <ContainerWedding>
                <MainCoverWrapper>
                    <ContainerWeddingSection isBrown>
                        <ContainerWeddingSpace txtCenter>
                            <MainCoverArea>
                                <ImageCover src={HeroCover} alt='Hero Cover jpeg of cepy & nissa - intimate wedding' />
                            </MainCoverArea>
                            <TextCoverArea>
                                <HeadingOne>
                                    cepy & nissa
                                </HeadingOne>
                                <TextParagraphTwo>Kami mengundang Anda untuk menghadiri acara Intimate Wedding</TextParagraphTwo>
                            </TextCoverArea>
                        </ContainerWeddingSpace>
                    </ContainerWeddingSection>
                   <ButtonContainer>
                    <Button isSecondary>
                    <Link to='/perhatian'>BUKA UNDANGAN</Link>
                    </Button>
                   </ButtonContainer>
                </MainCoverWrapper>
            </ContainerWedding>
        </MainWeddingArea>
    )
}

export { Cover }