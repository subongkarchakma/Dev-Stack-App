
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo-text.png";

const Nav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return ( <nav className="my-4 sticky top-0 z-50 bg-white"> <div className="container mx-auto">

    {/* Navbar Top */}
    <div className="flex items-center justify-between">
      
      {/* Left: Hamburger - Mobile Only */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-2xl"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Center/Left: Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-32 md:w-auto"
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Right: Buttons */}
      <div className="flex items-center">
        <button className="btn border-none font-normal bg-white">
          Sign In
        </button>

        <button className="btn px-5 py-2 text-white bg-[#D91B7E] rounded-full">
          Sign Up
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <ul className="md:hidden flex flex-col gap-4 py-5">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    )}
  </div>

  <hr className="mt-3" />
</nav>

);
};

export default Nav;
