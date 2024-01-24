import React from "react"

import WhatGPT from "./components/WhatGPT"
import Brand from "./components/Brand"
import Cta from "./components/Cta"
import Feature from "./components/Feature"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Posibility from "./components/Posibility"
import Blog from "./components/Blog"

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Brand />
      <WhatGPT />
      <Feature />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
