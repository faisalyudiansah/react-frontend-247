import React, { useState } from 'react'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Content } from './components/Content/Content'

const App = () => {
  const [tab, setTab] = useState(0)

  return (
    <>
      <Header setTab={setTab} tab={tab} />
      <Content setTab={setTab} tab={tab} />
      <Footer />
    </>
  )
}

export default App