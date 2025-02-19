import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
    return (
   
      <div>
  <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6" id="contact">


    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
     

      {/* Left: Contact Info */}
      <div>
        

        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Get in Touch
        </h2>
        
        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          Ready to transform your business with AI?
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-purple-500 text-xl">📧</span>
            <a
              href="mailto:contact@agentiaworld.com"
              className="text-gray-300 hover:text-white text-sm sm:text-base"
            >
              contact@agentiaworld.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-purple-500 text-xl">🌐</span>
            <a
              href="https://www.agentiaworld.com"
              className="text-gray-300 hover:text-white text-sm sm:text-base"
            >
              www.agentiaworld.com
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <CiTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-900 border border-gray-700 text-white px-4 py-3 w-full rounded text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-900 border border-gray-700 text-white px-4 py-3 w-full rounded text-sm sm:text-base"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-900 border border-gray-700 text-white px-4 py-3 w-full rounded text-sm sm:text-base"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-gray-900 border border-gray-700 text-white px-4 py-3 w-full rounded text-sm sm:text-base"
        ></textarea>

        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded text-base sm:text-lg font-semibold hover:opacity-90 transition">
          Send Message
        </button>
      </div>
    </div>
  </section>
</div>
    );
  }
  
