import tw , {styled} from 'twin.macro' ; 

export const Button = styled.button(({isSecondary}) => [
    tw`bg-white text-blue text-center focus:bg-brown-dark focus:text-white border border-blue px-12 py-1 font-medium rounded-full`,
    isSecondary &&  tw`bg-brown-dark text-white focus:bg-white focus:text-blue`
])

