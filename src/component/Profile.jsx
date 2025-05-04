import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
    <div className="w-full md:w-1/2 text-left space-y-6">
          <div className="m-2 p-2">
            <h1 className="text-xl font-bold text-black-600 text-left">Education</h1>
            <li className="text-gray-700 pt-2.5">Bachelor's Degree in Software Engineering</li>
          </div>
          <div className="m-2 p-2">
            <h1 className="text-xl font-bold text-black-600 text-left pt-9 pb-2.5 mt-3">
                Experience
                </h1>
            <li className="text-gray-700">2 years of experience in full-stack development</li>
            <li className="text-gray-700">2 years of experience in mobile development</li>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 text-left space-y-6 ">
          <div className="m-2 p-2">
            <h1 className="text-xl font-bold text-black-600 text-left pb-2.5">Development</h1>
            <li className="text-gray-700">Passionate full-stack developer skilled in JavaScript,
                 React, Node.js, and React Native. Experienced in building responsive, efficient 
                 web and mobile applications with modern UI frameworks like Tailwind CSS,
                 Bootstrap and some framework other than these.</li>
          </div>
          <div className="m-2 p-2">
            <h1 className="text-xl font-bold text-black-600 text-left pb-2.5">Maintenance</h1>
            <li className="text-gray-700">
                Focused on ensuring system stability, performance optimization, and continuous 
                improvement. Proactive in identifying and fixing issues, updating features, 
                and maintaining clean, scalable code.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
