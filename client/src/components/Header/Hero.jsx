import React from 'react'

export const Hero = ({ setTab, tab }) => {

  const onChangeTab = (valueTab) => {
    setTab(valueTab)
  }

  return (
    <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content w-96">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Muhammad Faisal Yudiansah</h1>
          <p className="mb-5">Frontend Test 247</p>
          <button
            onClick={() => onChangeTab(1)}
            className="btn btn-primary mr-1 w-28 rounded-s-full"
          >
            Tab 1
          </button>
          <button
            onClick={() => onChangeTab(2)}
            className="btn btn-primary ml-1 w-28 rounded-e-full"
          >
            Tab 2
          </button>
        </div>
      </div>
    </div>
  )
}
