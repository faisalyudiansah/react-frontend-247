import React from 'react';
import heroImage from '../../assets/analysis.png';

export const ContentDefault = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`, // Use `url()` to specify the image path
    backgroundSize: 'cover', // Adjust as needed for your layout
    backgroundPosition: 'center', // Center the image
  };

  return (
    <div className="hero min-h-screen" style={heroStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Press tab 1 or tab 2 to select the website interaction option. Tab 1 is for word games and tab 2 is for square box games.
          </p>
          <a className="btn bg-yellow-500 hover:bg-yellow-400 border-none text-white" href='#navbar'>Get Started</a>
        </div>
      </div>
    </div>
  );
};
