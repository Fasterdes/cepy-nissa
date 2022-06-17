import React from "react"
import tw from "twin.macro"
import { HeadingTwo} from "../common/typography"

const NavWrapper = tw.nav`px-10 py-3 border-b border-blue`

const Header = () => { 
    return (
        <> 
           <NavWrapper> 
               <HeadingTwo> 
                   cepy <br /> &  nissa
               </HeadingTwo>
           </NavWrapper>
        </>
    )
}

export { Header }