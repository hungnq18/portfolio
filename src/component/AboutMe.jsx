import React from 'react'
import Explore from './Explore'
import Introduction from './Introduction'

function AboutMe() {

  return (
    <div className="about-me flex flex-col justify-center items-center bg-gray-100 p-8 md:p-16">
      <div className="title border-solid border-4 border-black p-4 mb-8 flex centers justify-center">
       <h1 className="text-2xl font-bold ">ABOUT ME</h1>
      </div>
      <Introduction />
      <Explore />
    </div>
  )
}

export default AboutMe
