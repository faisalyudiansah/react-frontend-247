import React from 'react'
import heroImage from '../../assets/hero.png'

export const Hero = ({ setTab, tab }) => {

  const onChangeTab = (valueTab) => {
    setTab(valueTab)
  }

  return (
    <>
      <section className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <img src={heroImage} className="w-sm md:w-1/2 rounded-lg" />
          <div className='md:mt-0 mt-5 text-black lg:ml-20 ml-0'>
            <h1 className="text-5xl font-bold">Muhammad Faisal Yudiansah</h1>
            <p className="py-6 text-justify">Frontend test - 247</p>
            <div className='flex md:justify-start justify-center items-center'>
              <button
                onClick={() => onChangeTab(1)}
                className={`btn hover:bg-yellow-400 text-white mr-1 w-28 rounded-s-full ${tab === 1 ? `bg-yellow-600` : `bg-yellow-500`}`}
              >
                Tab 1
              </button>
              <button
                onClick={() => onChangeTab(2)}
                className={`btn hover:bg-yellow-400 text-white mr-1 w-28 rounded-e-full ${tab === 2 ? `bg-yellow-600` : `bg-yellow-500`}`}
              >
                Tab 2
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
