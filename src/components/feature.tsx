import { FaCode } from "react-icons/fa";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";
import { IoShieldOutline } from "react-icons/io5";
import { TbBrain } from "react-icons/tb";


export default function Feature() {
  return (
    <div className="bg-black  h-[600px] pt-[200px] max-sm:pt-[900px] " id="feature ">
         <h1 className="text-4xl md:text-6xl font-bold text-center pt-10">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent  bg-clip-text">
        Neural Capabilities
        </span>
        
      </h1>
      <div className="flex justify-center items-center max-sm:pt-[100px]">
        <p className="text-xl text-white mt-5">
            
        Powered by next-generation artificial intelligence
        </p>


      </div>
      <br />
<br />
      <div className="grid grid-cols-4 pl-9 max-sm:grid-cols-1 md:grid-cols-3"> 
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

        <h3 className="text-lg font-semibold text-white">Autonomous Learning</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning
         </p>
        
      </div>
    </div>
    </div>
    <div>
    <div
      className="bg-black border border-purple-500  hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="p-6">
      <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
    <FaRegMessage size={30} className="text-white" />
    </div>
        <br />
        <br />
        <br />
        <h3 className="text-lg font-semibold text-white">Multi-Modal Intelligence
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Advanced agents capable of processing text, voice, and visual data for comprehensive understanding
       </p>
        
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
        <h3 className="text-lg font-semibold text-white">Cognitive Integration</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Seamless integration with existing systems through advanced cognitive APIs and neural bridges</p>
        
      </div>
    </div>
    </div>
    <div>
    <div
      className="bg-black border border-purple-500 hover:shadow-lg hover:shadow-purple-900 hover:ring-2 hover:ring-purple-600 transition-transform duration-300 cursor-pointer hover:scale-105 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  w-[250px] h-[300px] max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="p-6">
      <div  className="bg-gradient-to-r from-purple-500 to-blue-600 py-2 rounded-xl mx-auto flex justify-center items-center h-[60px] w-[60px] transition-transform duration-500 hover:rotate-90">
    <IoShieldOutline  size={30} className="text-white" />
    </div>
        <br />
        <br />
        <br />
        <h3 className="text-lg font-semibold text-white">Ethical AI Framework</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Built-in ethical guidelines and safety protocols ensuring responsible AI deployment
</p>
        
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
