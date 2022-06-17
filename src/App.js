import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/layout/layout";
import MetaHead from "./component/meta";
import { Cover } from "./page/cover";
import { Home } from "./page/home";
import { Perhatian } from "./page/perhatian";


export default function App() {
  return (
    <>
      <MetaHead title='Cepy & Nissa - Intimate Wedding' />
      <Routes>
        <Route path='/' element={<Cover />} />
        <Route path='/perhatian' element={<Perhatian />} />
        <Route path='/home' element={
          <Layout>
            <Home />
          </Layout>
        }/>
      </Routes>
    </>
  )
}