import React from 'react'
import { CiBoxList } from 'react-icons/ci'
import { IoShieldOutline } from 'react-icons/io5'
import { TiWorld } from 'react-icons/ti'

export default function Agents() {
  return (
    <div>
       <div className='pt-[400px] max-sm:pt-[1700px]'>
          <div className="bg-black h-[600px] " id='agents'>
                 <h1 className="text-4xl md:text-6xl font-bold text-center pt-10">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent  bg-clip-text">
                AI Solutions
                </span>
                
              </h1>
              <div className="flex justify-center items-center">
                <p className="text-xl text-white mt-5">
                    
                Transforming industries with intelligent agents
                </p>
        
        
              </div>
              <br />
        <br />
              <div className="grid grid-cols-3 gap-7 max-sm:grid-cols-1"> 
            <div>
            <div
              className="bg-black border shadow border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="p-6">
            <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
            <TiWorld size={30} className="text-white" />
            </div>
                <br />
                <br />
                <br />
        
                <h3 className="text-lg font-semibold text-white">Enterprise AI</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Custom AI agents designed for enterprise-scale operations and decision-making
                 </p>
                
              </div>
            </div>
            </div>
            <div>
            <div
              className="bg-black border border-purple-500  hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="p-6">
              <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
            <CiBoxList size={30} className="text-white" />
            </div>
                <br />
                <br />
                <br />
                <h3 className="text-lg font-semibold text-white">Neural Operations
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">Automated workflow optimization through distributed neural networks</p>
                
              </div>
            </div>
            </div>
            <div>
            <div
              className="bg-black border border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="p-6">
              <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
            <IoShieldOutline size={30} className="text-white" />
            </div>
                <br />
                <br />
                <br />
                <h3 className="text-lg font-semibold text-white">Secure Intelligence</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">Privacy-first AI solutions with military-grade security protocols</p>
                
              </div>
            </div>
            </div>
            <div>
         
            </div>
            </div>
            </div> 
       </div>   
    </div>
  )
}
