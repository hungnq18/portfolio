import { AtSign, Github, Linkedin } from 'lucide-react'; // Lucide icons
import React, { useState } from 'react';
import image from '../assets/my-photo.png'; // Replace with actual image path
import Header from './Header';
export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleReadMore = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row flex-1 relative">
        {/* Left Section - Light Background */}
        <div className="w-full md:w-1/2 bg-gray-100  p-8 md:p-16 flex flex-col justify-center z-10">
          <div className="absolute top-8 left-8">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-black">NH</span>
            </div>
          </div>

          <div className="mt-24 md:mt-0">
            <p className="text-xl mb-2">Hi, I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Nguyen Quy Hung</h1>
            <p className="text-gray-600 mb-8 pt-2">Full Stack Developer</p>
            <div className="flex space-x-3 mt-6">
              <a href="mailto:example@example.com" className="bg-gray-200 p-2 rounded-full">
                <AtSign size={20} />
              </a>
              <a href="https://github.com/hungnq18" className="bg-gray-200 p-2 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="bg-gray-200 p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Right Section - Dark Background */}

        <div className="realative w-full md:w-1/2 bg-black h-[800px] text-white p-8 md:p-16 flex flex-col z-1000 overflow-hidden ">
          <div class="absolute top-[0px] left-[625px] w-[720px] h-[1000px] bg-black rotate-[9.6deg] z-10 overflow-hidden"></div>
          {/* Header */}
          <Header />
          <div className="flex-1 flex bottom-0 top-0 z-10">
            <img
              src={image} // Replace with actual image path
              alt="Professional portrait"
              width={550}
              height={700}
              className="object-cover"
            />
          </div>

        </div>

        {/* Diagonal Overlay */}
        <div className="absolute inset-0 pointer-events-none hidden md:block z-100">
          <div
            className="absolute inset-0 bg-black"
            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
          ></div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="text-white p-8 md:p-16 z-1000"
        style={{
          background: 'linear-gradient(90.18deg, #1D1D1D 31.74%, #1D1D1D 90.49%, #1D1D1D 90.49%)',
        }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest mb-6">Cover Letter</h2>
          <p className={`text-gray-400 mb-6 max-w-3xl ${isOpen ? '' : 'line-clamp-3'}`}>
            Dear potential clients and partners,<br />
            <br />
            My name is Nguyen Quy Hung, and I am a passionate Full Stack Developer. I specialize in building scalable, reliable, and high-performance applications, working across both front-end and back-end technologies. With a strong foundation in both client-side and server-side development, I take pride in creating seamless and efficient digital experiences for users.
            <br />
            <br />
            Throughout my career, I have gained experience in a variety of technologies, including React, React Native, Node.js, Nest.js, Express, MongoDB, SQL, and many more. I have worked on multiple projects where I designed, developed, and deployed complete web applications, ensuring that they are both user-friendly and technically robust.
            <br />
            <br />
            In this portfolio, you will find a selection of projects that showcase my skills in both front-end and back-end development. Each project demonstrates my commitment to writing clean, maintainable code while solving complex problems efficiently.
            <br />
            <br />
            I am always eager to learn and adapt to new technologies, and I look forward to collaborating with you to build impactful and innovative software solutions. Please feel free to reach out if you have any questions or are interested in working together.
            <br />
            <br />
            Thank you for visiting my portfolio. I am excited about the possibility of collaborating with you!
            <br />
            <br />
            Best regards,
            <br />
            <br />
            Nguyen Quy Hung
          </p>

          <button onClick={handleReadMore} className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors uppercase text-sm tracking-wider">
            {isOpen ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </main>
  );
}
