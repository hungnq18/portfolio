import React from 'react'

function Header() {
    return (
           <div className="flex justify-end space-x-8 font-bold mb-16  z-1000">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About me
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              CONTACT ME
            </a>
          </div>

    )
}

export default Header
