import Link from "next/link";
import { LiaRobotSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
const links = [
  { name: "Feature", path: "#feature" },
  { name: "Technology", path: "#technology" },
  { name: "Agents", path: "#agents" },
  { name: "Pricing", path: "#pricing" },
  { name: "Contact", path: "#contact" },
];
export default function Header() {
  return (
 
    <div className="fixed top-0 left-0 w-full bg-black shadow z-50" >
  <header className="flex py-4 px-4 sm:px-6 font-sans min-h-[70px] tracking-wide">
    <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
      
      {/* Logo */}
    
    <Link href={"/"}>  <div className="flex justify-center gap-2">
        <LiaRobotSolid className="text-purple-500 text-4xl" />
        <p className="text-white text-2xl font-bold">Agentia World</p>
      </div></Link>

      {/* Mobile Logo */}
    

      {/* Navigation Menu */}
      {/* <div id="collapseMenu" className="max-lg:hidden lg:block">
        <ul className="lg:flex gap-x-5 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto bg-black z-50">
          {["Home", "Team", "Feature", "Blog", "About", "Contact"].map((item, index) => (
            <li key={index} className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-white text-white text-lg">{item}</a>
            </li>
          ))}
        </ul>
      </div> */}
           <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-4">
            {links.map((link, index) => (
              <li key={index} className="px-3">
                <Link href={link.path}>
                  <span className="hover:text-[#FFF8DC] text-[#e0d8d8]">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button type="button" className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg text-white text-[20px] flex items-center justify-center gap-2">
          Launch Console
        </button>

        {/* Mobile Menu Toggle */}
        <div>
          <RxHamburgerMenu/>
        </div>
      </div>
           {/* Mobile Menu */}
           <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-2xl text-white" />
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <ul className="mt-4 space-y-4">
                {links.map((list, index) => (
                  <li key={index} className="mx-5 text-xl font-bold">
                    <Link href={list.path}>
                      <span>{list.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" sm:flex items-center gap-2">
                <button className="px-5 py-2 sm:px-6 sm:py-3 w-full text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-purple-500">
                  Launch Console
                </button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
    </div>
  </header>
</div>

  )
}
