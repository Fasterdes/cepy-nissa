import tw from "twin.macro";
import { ContainerWeddingSection, ContainerWeddingSpace } from "../common/container";
import { TextParagraphTwo, TextParagraphOne, HeadingTwo, HeadingFour } from "../common/typography";
import {PlayMusic} from "../music";

const TextFooterArea = tw.div`space-y-5`
const TextBoldFooter = tw.span`font-medium`

const FooterMainArea = tw.div`max-w-xs mx-auto bg-brown-500 py-12 text-white text-center border border-blue rounded-full text-white space-y-16`
const FooterTextArea = tw.div`space-y-5`
const HeadingFooter = tw(HeadingFour)`text-white`
const FooterList = tw.ul`space-y-4 font-inter `
const FooterItem = tw.li`text-sm capitalize`
const FooterCopyright = tw.p`text-sm font-medium tracking-tighter`
const FooterLink = tw.a`text-white underline`

const Footer = () => {
    return (
        <ContainerWeddingSection>
            <ContainerWeddingSpace txtCenter>
                <TextParagraphOne>
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Sahabat berkenan hadir untuk memberikan doa restu. Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
                </TextParagraphOne>

                <TextFooterArea>
                    <TextParagraphTwo>
                        <TextBoldFooter>
                        Kami yang berbahagia
                        </TextBoldFooter>
                    </TextParagraphTwo>
                    <HeadingTwo>
                        cepy & nissa
                    </HeadingTwo>
                </TextFooterArea>

                <FooterMainArea>
                    <FooterTextArea>
                        <HeadingFooter>supported by : </HeadingFooter>
                        <FooterList>
                            <FooterItem>
                                <FooterLink href="https://www.instagram.com/susygarden/" target="_blank" rel="noopener noreferrer">Susy Garden (Plants and Coffe)</FooterLink>
                            </FooterItem>
                            <FooterItem>
                                <FooterLink href="https://www.instagram.com/glowbalcourse/" target="_blank" rel="noopener noreferrer">glowbal course</FooterLink>
                            </FooterItem>
                            <FooterItem>
                                <FooterLink href="https://www.instagram.com/ayambakarwanaraja_dutaharapan/" target="_blank" rel="noopener noreferrer">ayam bakar wanaraja</FooterLink>
                            </FooterItem>
                            <FooterItem>
                                <FooterLink href="https://www.instagram.com/kabasakaryaanakbangsa/" target="_blank" rel="noopener noreferrer">sanggar kabasa</FooterLink>
                            </FooterItem>
                        </FooterList>
                    </FooterTextArea>
                    <FooterTextArea> 
                        <HeadingFooter>powered by : </HeadingFooter>
                        <br />
                        <FooterLink href="https://www.instagram.com/facalder_/" target="_blank" rel="noopener noreferrer">facalder_</FooterLink>
                    </FooterTextArea>

                    <FooterCopyright>designed and coded with ❣️ by <br /> <FooterLink href="https:/github.com/Fasterdes" target="_blank" rel="noopener noreferrer">Caldera</FooterLink>  </FooterCopyright>
                </FooterMainArea>
            </ContainerWeddingSpace>
           <PlayMusic/>
        </ContainerWeddingSection>
    )
}

export { Footer }