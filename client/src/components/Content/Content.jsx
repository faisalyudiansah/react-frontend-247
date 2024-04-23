import React from 'react'
import { ContentDefault } from './ContentDefault'
import heroImage from '../../assets/analysis.png';
import { InputAndTable } from './InputAndTable';

export const Content = ({ tab }) => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`, // Use `url()` to specify the image path
    backgroundSize: 'cover', // Adjust as needed for your layout
    backgroundPosition: 'center', // Center the image
  };
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
