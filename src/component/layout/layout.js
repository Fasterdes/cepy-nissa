import React from 'react'
import { ContainerWedding, ContainerWeddingWrapper, MainWeddingArea } from '../common/container'
import { Footer } from './footer'
import { Header } from './header'

const Layout = ({ children }) => {
    return (
        <MainWeddingArea>
            <ContainerWedding>
                <ContainerWeddingWrapper>
                    <Header/>
                    {children}
                    <Footer/>
                </ContainerWeddingWrapper>
            </ContainerWedding>
        </MainWeddingArea>
    )
}

export { Layout }