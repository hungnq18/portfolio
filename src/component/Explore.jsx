import React from 'react';
import image from '../assets/image.png'; // Replace with actual image path
import Profile from './Profile';
function Explore() {
  return (
    <div>
      <div className="title border-solid border-4 border-t-0 border-b-0 border-black p-4 m-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold">EXPLORE</h1>
      </div>
      
      <div className="flex justify-center items-center flex-col bg-gray-100 p-8 md:p-16">
        <img
          src={image} // Replace with actual image URL
          alt="pagination"
          className="object-cover"
            width={170}
            height={170}
        />  
      </div>
      <Profile /> 
    </div>
  );
}

export default Explore;
