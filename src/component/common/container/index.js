import tw , {styled} from "twin.macro";

const MainWeddingArea = tw.main`bg-brown h-full font-inter text-base leading-6 text-blue font-normal`
const ContainerWedding = tw.div`bg-brown-light max-w-md mx-auto border-l border-r h-full border-blue sm:border-none px-18`
const ContainerWeddingWrapper = tw.div`h-full border-l border-r border-blue`
const ContainerWeddingSection = styled.div(({isBrown , isDark}) => [ 
    tw`py-12 px-10 border-b border-blue w-full`,
    isBrown && tw`bg-brown`,
    isDark && tw`bg-brown-500 text-white`
])
const ContainerWeddingSpace = styled.div(({txtCenter , textLeft , textRight}) => [ 
    tw`space-y-11`,
    txtCenter && tw`text-center`,
    textLeft && tw`text-left`,
    textRight && tw`text-right`
])

export { 
    MainWeddingArea,
    ContainerWedding,
    ContainerWeddingWrapper,
    ContainerWeddingSection,
    ContainerWeddingSpace
}