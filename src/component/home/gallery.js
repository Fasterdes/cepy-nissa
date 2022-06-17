import tw from "twin.macro";

import Grid1 from '../../img/grid1.jpeg'
import Grid2 from '../../img/grid2.jpeg'
import Grid3 from '../../img/grid3.jpeg'

import { ContainerWeddingSpace } from "../common/container";
import { HeadingTwo, TextParagraphOne } from "../common/typography";

const HeadingGalleryArea = tw.div`space-y-6`
const GalleryWrapper = tw.div`space-y-5`
const GalleryImage = tw.img`border border-blue rounded-2xl`

const Gallery = () => {
    return (
        <ContainerWeddingSpace txtCenter>
            <HeadingGalleryArea>
                <HeadingTwo>our moment</HeadingTwo>
                <TextParagraphOne>“Kalaulah aku kumpulkan semua saat-saat bahagia dalam hidupku semuanya tidak akan dapat menyamai indahnya waktu yang aku habiskan bersamamu.”</TextParagraphOne>
            </HeadingGalleryArea>
            
            <GalleryWrapper> 
                <GalleryImage src={Grid1} alt='Grid 1 Our Moment Gallery cepy & nissa - intimate wedding'/>
                <GalleryImage src={Grid2} alt='Grid 2 Our Moment Gallery cepy & nissa - intimate wedding'/>
                <GalleryImage src={Grid3} alt='Grid 3 Our Moment Gallery cepy & nissa - intimate wedding'/>
            </GalleryWrapper>
        </ContainerWeddingSpace>
    )
}

export { Gallery }