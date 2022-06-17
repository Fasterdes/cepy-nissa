import { GlobalStyles as BaseStyles } from "twin.macro";
import { css, Global } from "@emotion/react";
import React from "react";

const costume_style = css`
    body : { 
        font-family : 'Inter' , 'sans-serif;
        font-weight : 400; 
        font-size : 1rem;
    }
`

export function GlobalStyles () { 
    return ( 
        <React.Fragment> 
            <BaseStyles/>
            <Global styles={costume_style}/>
        </React.Fragment>
    )
}