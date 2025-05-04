import React from 'react'
import Explore from './Explore'
import Introduction from './Introduction'
import Skills from './Skills'

function AboutMe() {

  return (
    <div className="about-me flex flex-col justify-center items-center p-8 md:p-16">
      <div className="title border-solid border-4 border-black p-4 mb-8 flex centers justify-center">
       <h1 className="text-2xl font-bold w-70 text-center font-weght=bold"> A  B  O  U  T  M  E </h1>
      </div>
      <Introduction />
      <Explore />
      {/*Skills */}
      <div className="title border-solid border-4 border-black p-4 mb-8 flex centers justify-center">
       <h1 className="text-2xl font-bold w-70 text-center font-weght=bold"> S K  I  L  L  S </h1>
      </div>
      <Skills />
    </div>
  )
}

export default AboutMe
