import  React, { useState } from "react"
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  const  [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-white z-10 overflow-hidden">
      <div className="container mx-auto p-4 md:p-6 flex justify-between items-center flex-wrap">
        <div className="flex">
          <h2 className="text-2xl font-bold text-purple-500">Yolitzareth Zacarias</h2>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="space-y-1 cursor-pointer lg:hidden">
          <div className="w-6 h-0.5 bg-purple-900"></div>
          <div className="w-6 h-0.5 bg-purple-900"></div>
          <div className="w-6 h-0.5 bg-purple-900"></div>
          <div className="w-6 h-0.5 bg-purple-900"></div>
        </div>
        <ul className={isOpen ? 'w-full flex flex-col items-center mt-4 space-y-4' : 'hidden lg:flex space-x-10'}>
          <li className="hover:text-purple-600 transition">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#">About Me</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#">Works</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#">Contact</a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faMoon} className="hidden lg:block text-purple-500 cursor-pointer hover:text-purple-300" />
      </div>
    </nav>
  )
}

export default NavBar;