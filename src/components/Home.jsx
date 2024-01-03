import React from 'react';
import Image from '../Assests/Image.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 md:pl-8">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">I'm a front-end developer</h2>
          <p className="text-gray-500 mx-w-md mb-4">
            I am a student of Computer Science and Engineering. Currently, I am in the 3rd year, and I love to work on web
            applications using technologies like React and TailwindCSS.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
              bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-0 flex items-center justify-center">
          <div className="overflow-hidden" style={{ marginTop: '2rem' }}>
            <img src={Image} alt="my profile" className=" rounded-xl w-full h-72 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
