import { Link } from "react-router-dom";
import tw from "twin.macro";
import { Button } from "../component/common/button";

import { MainWeddingArea, ContainerWedding, ContainerWeddingWrapper, ContainerWeddingSpace, ContainerWeddingSection } from "../component/common/container";
import { HeadingFour, HeadingTwo, TextParagraphOne, TextParagraphTwo } from "../component/common/typography";

const PerhatianHeadingWrapper = tw.div`space-y-5`
const HeadingPerhatianWrapper = tw.div`space-y-2`
const ButtonPerhatianWrapper = tw.div`py-4 text-center`

const Perhatian = () => {
    return (
        <MainWeddingArea>
            <ContainerWedding>
                <ContainerWeddingWrapper>
                    <ContainerWeddingSection>
                        <ContainerWeddingSpace>
                            <ContainerWeddingSpace txtCenter>
                                <PerhatianHeadingWrapper>
                                    <HeadingTwo>protokol kesehatan</HeadingTwo>
                                    <TextParagraphTwo>Sehubungan dengan situasi pandemi Covid-19, tanpa mengurangi rasa hormat, kami menghimbau kepada seluruh tamu undangan untuk menerapkan protokol kesehatan sesuai dengan anjuran pemerintah.</TextParagraphTwo>
                                </PerhatianHeadingWrapper>
                                <HeadingPerhatianWrapper>
                                    <HeadingFour>jaga jarak aman</HeadingFour>
                                    <TextParagraphOne>selalu berjaga jarak selagi acara</TextParagraphOne>
                                </HeadingPerhatianWrapper>
                                <HeadingPerhatianWrapper>
                                    <HeadingFour>memakai masker</HeadingFour>
                                    <TextParagraphOne>selalu memakai masker selagi acara dan berbincang-bincang</TextParagraphOne>
                                </HeadingPerhatianWrapper>
                                <HeadingPerhatianWrapper>
                                    <HeadingFour>membawa hand sanitizier</HeadingFour>
                                    <TextParagraphOne>selalu membawa hand sanitizier sebelum menyentuh dan membawa makanan</TextParagraphOne>
                                </HeadingPerhatianWrapper>
                                <HeadingPerhatianWrapper>
                                    <HeadingFour>hindari kerumunan</HeadingFour>
                                    <TextParagraphOne>sebisa mungkin untuk menghindari kerumunan agar mencegah penularan</TextParagraphOne>
                                </HeadingPerhatianWrapper>
                                <HeadingPerhatianWrapper>
                                    <HeadingFour>tidak berjabat tangan</HeadingFour>
                                    <TextParagraphOne>sebisa mungkin tidak berjabat tangan saat bertemu untuk mencegah penularan</TextParagraphOne>
                                </HeadingPerhatianWrapper>
                            </ContainerWeddingSpace>
                        </ContainerWeddingSpace>
                    </ContainerWeddingSection>
                   <ButtonPerhatianWrapper> 
                         <Button isSecondary><Link to='/home'>SELAMAT DATANG</Link></Button>
                   </ButtonPerhatianWrapper>
                </ContainerWeddingWrapper>
            </ContainerWedding>
        </MainWeddingArea>
    )
}

export { Perhatian }