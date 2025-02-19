"use client";

import  Typewriter  from "typewriter-effect"
import { LiaRobotSolid } from "react-icons/lia";

export default function HeroSection() {
 
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-purple-700 text-white px-4">
      {/* Badge */}
      <div className="flex items-center bg-gray-800 px-4 py-3 rounded-full text-sm text-purple-400 ">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
        POWERED BY PANAVERSITY
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-8xl font-bold text-center mt-4">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent  bg-clip-text">
          Enterprise AI Agents
        </span>
        <br />
        for the Future
      </h1>

      {/* Chatbot Input Box */}
    {/* <div className="flex items-center justify-center bg-gray-900  px-2 py-3 rounded-lg w-[600px]  h-[100px] border border-gray-700">


<LiaRobotSolid className="text-white rounded-full text-3xl  mr-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-300" />

    <div className="flex items-center max-sm:w-[200px] bg-gray-900 mt-6 px-4  mb-3 py-3 rounded-lg w-full max-w-xl h-[60px] border border-gray-700">
       
        <input
          
          className="bg-transparent text-start max-sm:w-[100px] outline-none  text-gray-300"
        />
<Typewriter
      options={{
                            strings: [
                                "Hello! I'm your AI agent. How can I enhance your business today?",
                                "I can help optimize your workflows with neural networks.",
                                "Let me assist you with advanced data analytics.",
                                "Would you like to explore our AI integration solutions?"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
      </div>
    </div> */}
<div className="flex flex-col sm:flex-row items-center justify-center bg-gray-900 px-4 py-3 rounded-lg w-full max-w-xl h-auto sm:h-[100px] border border-gray-700">
  <LiaRobotSolid className="text-white rounded-full text-3xl mr-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-300" />

  <div className="flex items-center w-full bg-gray-900 px-4 py-3 rounded-lg border border-gray-700">
    <input
      className="bg-transparent text-start w-full outline-none text-gray-300"
    
    />
    <Typewriter
      options={{
        strings: [
          "Hello! I'm your AI agent. How can I enhance your business today?",
          "I can help optimize your workflows with neural networks.",
          "Let me assist you with advanced data analytics.",
          "Would you like to explore our AI integration solutions?"
        ],
        autoStart: true,
        loop: true,
      }}
    />
  </div>
</div>

      {/* Buttons */}
      <div className="">
        <div className="flex mt-6 space-x-4 ">
        {/* <button className="bg-gradient-to-r shadow button from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-white font-semibold">
          Deploy Your AI Agent &rarr;
        </button> */}

<button className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-transparent hover:border-white/50 hover:shadow-lg hover:shadow-blue-500/50">
Deploy Your AI Agent <span>→</span>
</button>

<button className="relative bg-black text-white px-6 py-3 rounded-lg    font-semibold transition-all duration-300 border-2 border-purple-800 hover:shadow-lg hover:shadow-purple-700">
Watch Demo <span>→</span>
</button>
      </div></div>
    </section>
  );
}

