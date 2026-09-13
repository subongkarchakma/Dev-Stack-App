import React from 'react';
import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
       <nav className='my-4 sticky top-0 z-50'>
           <div className='container mx-auto flex justify-between'>
            <img src={logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className="btn border-none font-normal bg-white">Sign In</button>
                <button className="btn px-5 py-2 text-white bg-[#D91B7E] rounded-full">Sign Up</button>
            </div>
            </div>
            <hr className='mt-3' /> 
        </nav>
    );
};

export default Nav;