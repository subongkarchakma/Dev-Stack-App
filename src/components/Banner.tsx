import React from 'react';
import logo from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="container mx-auto flex items-center justify-between ">
      <div>
        <h1 className="text-6xl font-bold">
          Build Your Ideal <br />{' '}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="py-8 text-xl text-[#475569]">
          Explore frontend, backend, database, and tooling options, <br />{' '}
          compare them side by side, and put together the stack that fits your{' '}
          <br /> next project.
        </p>
        <div className="flex gap-2">
          <button className="btn px-9 py-3 rounded-lg text-white bg-linear-to-r from-purple-500 to-pink-400  ">
            Explore Technologies
          </button>
          <button className="btn rounded font-normal px-9 py-3 bg-[#FFFFFF]">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
