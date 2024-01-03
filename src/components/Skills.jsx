import React from 'react';
import html from "../Assests/html.png";
import javascript from "../Assests/javascript.png";
import tailwindcss from "../Assests/tailwindcss.jpg";
import cpp from "../Assests/cpp.png";
import SQL from "../Assests/SQL.png";
import react from "../Assests/react.png";




const Skills = () => {

    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:3,
            src:react,
            title:'REACT',
            style:'shadow-blue-500'
        },
        {
            id:4,
            src:tailwindcss,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:5,
            src:cpp,
            title:'CPP',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:SQL,
            title:'SQL',
            style:'shadow-blue-300'
        },
        
    ]

  return (
    
    <div name="Skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Skills </p>
            <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0">

            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-1 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
            </div>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Skills;
