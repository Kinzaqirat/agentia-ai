import React from 'react'
import { FaCode } from 'react-icons/fa'
import { HiOutlineCpuChip } from 'react-icons/hi2'
import { LuEarth } from 'react-icons/lu'
import { TbBrain } from 'react-icons/tb'

export default function Technology() {
  return (
    <div className=''>
       <div className="bg-black h-[600px]  " id='technology'>
              <h1 className="text-4xl md:text-6xl font-bold text-center pt-10">
             <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent  bg-clip-text">
             Powered by Advanced AI
             </span>
             
           </h1>
           <div className="flex justify-center items-center">
             <p className="text-xl text-white mt-5">
                 
             Built on cutting-edge neural architectures
             </p>
     
     
           </div>
           <br />
     <br />
           <div className="grid grid-cols-4 pl-9 max-sm:grid-cols-1 md:grid md:grid-cols-3 max-sm:gap-3"> 
         <div>
         <div
           className="bg-black border shadow border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
           <div className="p-6">
         <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
         <TbBrain size={30} className="text-white" />
         </div>
             <br />
             <br />
             <br />
     
             <h3 className="text-lg font-semibold text-white">Neural Networks</h3>
             <p className="mt-2 text-sm text-gray-500 leading-relaxed">
             Advanced neural architectures for complex decision making
              </p>
             
           </div>
         </div>
         </div>
         <div>
         <div
           className="bg-black border border-purple-500  hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
           <div className="p-6">
           <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
         <HiOutlineCpuChip size={30} className="text-white" />
         </div>
             <br />
             <br />
             <br />
             <h3 className="text-lg font-semibold text-white">Deep Learning
             </h3>
             <p className="mt-2 text-sm text-gray-500 leading-relaxed">Sophisticated deep learning models for pattern recognition</p>
             
           </div>
         </div>
         </div>
         <div>
         <div
           className="bg-black border border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
           <div className="p-6">
           <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
         <FaCode size={30} className="text-white" />
         </div>
             <br />
             <br />
             <br />
             <h3 className="text-lg font-semibold text-white">Advanced ML</h3>
             <p className="mt-2 text-sm text-gray-500 leading-relaxed">Cutting-edge machine learning algorithms</p>
             
           </div>
         </div>
         </div>
         <div>
         <div
           className="bg-black border border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
           <div className="p-6">
           <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
         <LuEarth   size={30} className="text-white" />
         </div>
             <br />
             <br />
             <br />
             <h3 className="text-lg font-semibold text-white">Global Scale</h3>
             <p className="mt-2 text-sm text-gray-500 leading-relaxed">Distributed AI processing across global networks


     </p>
             
           </div>
         </div>
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
        
         </div> 
      
    </div>
  )
}
