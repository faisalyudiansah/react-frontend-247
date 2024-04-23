import React, { useEffect, useState } from 'react'
import { ContentDefault } from './ContentDefault'
import imageZero from '../../assets/analysis.png';
import imageOneAndTwo from '../../assets/letsTalk.png';
import { InputAndTable } from './InputAndTable';

export const Content = ({ tab }) => {
  const [tempImage, setTempImage] = useState(imageZero)
  const heroStyle = {
    backgroundImage: `url(${tempImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  function changeImage() {
    if (tab === 0) {
      return setTempImage(imageZero)
    } else {
      return setTempImage(imageOneAndTwo)
    }
  }

  useEffect(() => {
    changeImage()
  }, [tab])

  return (
    <>
      <div className="hero min-h-screen" style={heroStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          {tab === 0 && (
            <ContentDefault />
          )}
          {tab === 1 && (
            <InputAndTable />
          )}
          {tab === 2 && (
            <div>Content 2</div>
          )}
        </div>
      </div>
    </>
  )
}
