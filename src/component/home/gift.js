import tw from "twin.macro";
import { Button } from "../common/button";
import { ContainerWeddingSpace } from "../common/container";
import { HeadingTwo, TextBold, TextParagraphOne, TextParagraphThree } from "../common/typography";

const HeadingGiftArea = tw.div`space-y-6`
const GiftMainArea = tw.div`bg-white space-y-4 py-6 rounded-xl border border-blue`

const Gift = () => { 
   const textClipboard = '6630570342'

    return ( 
        <ContainerWeddingSpace txtCenter> 
            <HeadingGiftArea>
                <HeadingTwo>wedding gift</HeadingTwo>
                <TextParagraphOne>Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, dengan senang hati kami menerima kado secara cashless melalui :</TextParagraphOne>
            </HeadingGiftArea>
            <GiftMainArea>
                <TextParagraphThree isLora>Ramadhian Asih Nissahadi</TextParagraphThree>
                <TextParagraphOne>6630570342 / <TextBold>BCA</TextBold></TextParagraphOne>
                <Button isSecondary onClick={() => {navigator.clipboard.writeText(textClipboard); alert('Text Copied')}}>SALIN NO REKENING</Button>
            </GiftMainArea>
        </ContainerWeddingSpace>
    )
}

export {Gift}