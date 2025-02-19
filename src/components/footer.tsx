import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LiaRobotSolid } from "react-icons/lia";


export default function Footer() {
  return (
    <div className="pt-[100px]  ">
      <footer className="font-sans tracking-wide bg-black pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <div className="flex justify-center pr-20 gap-2">
                 <LiaRobotSolid className="text-purple-500 text-4xl" />
                 <p className="text-white text-2xl font-bold">Agentia World</p>
               </div>
               
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className=" text-gray-300 mr-10 text-[15px] transition-all">Next-generation AI agents powering the future of enterprise intelligence.y</a>
            </li>
            <div className="mt-6 flex space-x-4">
                             <a href="#" className="text-gray-400 hover:text-white text-2xl"><CiTwitter /></a> {/* GitHub */}
                             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaGithub /></a> {/* LinkedIn */}
                             <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a> {/* Twitter */}
                           </div>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Products</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="] text-gray-500 text-[15px] hover:text-white transition-all">Feature</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="  text-gray-500 text-[15px] hover:text-white transition-all">Pricing</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="  text-gray-500 text-[15px] hover:text-white transition-all">Document</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">API</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Comapny</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white  transition-all">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Blog</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Careers</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">legal</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Privacy</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Terms</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-whitetransition-all">Security</a>
            </li>
            <li>
              <a href="javascript:void(0)" className=" text-gray-500 text-[15px] hover:text-white transition-all">Compliance</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p className="text-gray-300 text-[15px]">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}
