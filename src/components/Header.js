import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    
    <header className="flex justify-between px-5 py-4 bg-primary text-white w-full z-10 my-0">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Jobify📝
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#partner">Our Partners</a>
          </li>
          <li>
            <a href="/#Form">let's Register</a>
          </li>
          
          <li>
            <a href="/#contact">Contact</a>
          </li>
          
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#partner">Our Partners</a>
          </li>
          <li>
            <a href="/#Form">let's Register</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
    
  );
};

export default Header;
