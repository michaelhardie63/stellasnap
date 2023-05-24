import React from 'react'

const Header = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center text-center h-screen">
        <div className="start-animation w-full"></div>
            <div className=" text-center type-mark text-8xl text-white mb-2">
                <span>Stella</span><snap className="ml-[-8px]">Snap</snap>
            </div>
            <p className="text-white">Explore the cosmos one captivating image at a time.</p>
        </section>
  )
}

export default Header
