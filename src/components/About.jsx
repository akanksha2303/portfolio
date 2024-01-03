import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div>
            <p className="text-xl mt-17 font-signature1">
            I am Akanksha, a student pursuing a Bachelor of Technology (B.Tech) degree in Computer Science 
            and Engineering at Netaji Subhash Engineering College. My academic focus includes a comprehensive 
            understanding of computer science principles and practice. I have acquired proficiency in various programming 
            languages, such as C++, JavaScript, and HTML, and have extended my expertise to include web 
            development using React. My academic journey reflects a commitment to mastering a diverse
            set of technologies and applying them in practical scenarios.

            </p>
            <br/>
        <p className="text-xl font-signature1">
        I have acquired practical experience in front-end development through the implementation of projects 
        utilizing React and Tailwind CSS. Noteworthy among these projects are the development of a Netflix clone
         and a food ordering application. My focus and interest lie predominantly in the realm of front-end 
         development, where I have had the opportunity to apply my skills and contribute to the creation of
          user-friendly interfaces.
        </p>
       </div>
     </div>
    </div>
  )
}

export default About
