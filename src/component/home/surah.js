import tw from 'twin.macro'

import { HeadingFive, TextParagraphOne } from '../common/typography'

const MainSurahArea = tw.div`space-y-6 text-right`

const Surah = () => {
    return (
        <>
            <MainSurahArea>
                <HeadingFive>
                    وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
                    لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ
                    لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                </HeadingFive>
                <TextParagraphOne> 
                “Dan di antara tanda-tanda kekuasaan-Nya diciptakan -Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikan kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesran-Nya bagi orang-orang yang berpikir.”
                </TextParagraphOne>
            </MainSurahArea>
        </>
    )
}

export { Surah }