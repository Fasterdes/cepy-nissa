import 'boxicons'
import tw from "twin.macro";
import { Button } from "../common/button";
import { ContainerWeddingSpace } from "../common/container";
import { HeadingFive, HeadingFour, HeadingOne, HeadingThree, TextItalic, TextParagraphOne, TextParagraphThree } from "../common/typography";

const HeadingJadwalArea = tw.div`space-y-6`
const HeadingWrapperJadwalArea = tw.div``
const SubHeadingJadwalWrapper = tw.div`space-y-4`
const SubHeadingIconWrapper = tw(HeadingFive)`inline-flex items-center gap-x-2`
const GoogleMapFrameJadwal = tw.iframe`w-full h-[185px] rounded-xl border border-blue`
const GoogleMapLink = tw.a``

const Jadwal = () => { 
    return ( 
        <> 
            <ContainerWeddingSpace txtCenter> 
                <HeadingJadwalArea> 
                    <HeadingFour> 
                    بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                    </HeadingFour>
                    <HeadingFive> 
                    Assalamu’alaikum Warahmatullahi Wabarakaatuh
                    </HeadingFive>
                    <TextParagraphOne> 
                    "Dengan penuh rasa syukur dan memohon 
                        ridho Allah SWT, Kami bermaksud menyelenggarakan <TextItalic> 
                        “Intimate Wedding”</TextItalic>yang Insha Allah dilaksanakan pada"
                    </TextParagraphOne>
                </HeadingJadwalArea>
                <HeadingWrapperJadwalArea> 
                    <HeadingThree> 
                        Jumat
                    </HeadingThree>
                    <TextParagraphThree> 
                        13.00 - 15.00
                    </TextParagraphThree>
                </HeadingWrapperJadwalArea>
                <HeadingWrapperJadwalArea> 
                    <HeadingOne> 
                        24
                    </HeadingOne>
                    <TextParagraphThree> 
                       Juni
                    </TextParagraphThree>
                </HeadingWrapperJadwalArea>
                
                <SubHeadingJadwalWrapper> 
                    <SubHeadingIconWrapper> 
                       <box-icon name='map-alt' color='#020826' ></box-icon>
                        Susy Garden (Plants & Coffe)
                    </SubHeadingIconWrapper>
                    <TextParagraphOne>
                    Gg. Rambutan No.8 RT 003/007, Jatimurni, Kec. Pd. Melati, Kota Bks, Jawa Barat 17431
                    </TextParagraphOne> 
                </SubHeadingJadwalWrapper>

                <GoogleMapFrameJadwal src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5361897514704!2d106.92594601498624!3d-6.324482163646916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993b6e4569f9b%3A0x71100f6768a4e644!2sSusy%20Garden%20(Plants%20%26%20Coffee)!5e0!3m2!1sid!2sid!4v1654314751560!5m2!1sid!2sid" loading="lazy" title="Sushi Garden (Plants & Coffe) Map"/>

                <Button isSecondary>
                    <GoogleMapLink href="https://g.page/susygarden?share" target='_blank' rel="noopeener"> 
                        LIHAT PETA
                    </GoogleMapLink>
                </Button>
            </ContainerWeddingSpace>
        </>
    )
}

export { Jadwal }