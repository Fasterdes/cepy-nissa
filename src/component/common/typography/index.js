import tw, { styled } from 'twin.macro';

const HeadingOne = tw.h1`font-lora text-blue font-medium text-5xl capitalize`
const HeadingTwo = styled.h2(({ isLora , isWhite }) => [
    tw`font-lora text-blue font-medium text-4xl capitalize text-center`,
    isWhite && tw`text-white`,
    isLora && tw`font-lora text-yellow font-medium`
])
const HeadingThree = tw.h3`font-lora font-medium text-3xl text-blue mb-2 capitalize`
const HeadingFour = tw.h4`font-lora text-2xl font-medium text-blue capitalize`
const HeadingFive = tw.h5`font-lora text-xl font-medium text-blue`

const TextParagraphOne = tw.p`text-brown-dark font-inter tracking-normal text-paragraph`
const TextParagraphTwo = styled.p(({isWhite, isLora }) => [
    tw`text-base text-brown-dark font-inter`,
    isLora && tw`font-lora`,
    isWhite && tw`text-white font-medium`
])
const TextParagraphThree = tw.p`text-blue text-lg font-lora tracking-normal`

const TextItalic = tw.span`italic`
const TextBold = tw.span`italic font-bold`

export {
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    TextParagraphOne,
    TextParagraphTwo,
    TextParagraphThree,
    TextItalic,
    TextBold
}