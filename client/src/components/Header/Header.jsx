import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'

export const Header = ({ setTab, tab }) => {
  return (
    <>
      <Navbar setTab={setTab} />
      <Hero setTab={setTab} tab={tab} />
    </>
  )
}
