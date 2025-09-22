import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = ()=>{
  const [isMenuOpen,setisMenuOpen] = useState(false)
  const [activeLink,setActiveLink] = useState('#home')

  const navlinks = [
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#services",label:"Service"},
    {href:"#testimonials",label:"Testimonials"},
  ]
  return <motion.nav 
          variants={fadeIn('down',0.2)}
          initial="hidden"
          whileInView='show'
          viewport={{once:true}}
          className=" fixed bg-white/90  top-0 left-0 right-0 backgdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
    <div className="w-full mx-auto container flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-16 h-16">
      {/* {logo} */}

      <div className="flex items-center gap-1 cursor-pointer">
        <div className="w-4 h-4 bg-blue-600 rounded-full opacity-70 hover:opacity-100 transition-opacity"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity -m-2.5"></div>
      </div>
      
      {/* mobile menu btn*/}
        <button className="md:hidden p-2 text-2xl"
        onClick={()=>setisMenuOpen(!isMenuOpen)}>
          {isMenuOpen? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      {/* nav item */}
      <div className="hidden md:flex items-center gap-10">
        {
          navlinks.map((link,index)=>(
            <a key={index} href={link.href}
            onClick={()=>{setActiveLink(link.href)}} 
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${ activeLink === link.href ? "text-blue-600 after:w-full":"text-gray-600 hover:text-gray-900"}`}>
              {link.label}
            </a>
          ))
        }
      </div>
      {/* get in touch btn */}
      <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all
      hover:shadow-lg hover:shadow-blue-100">
        <a href="#newsletter">Get in touch</a>
      </button>
    </div>
      {/* mobile items */}
      {
         isMenuOpen && (
           <div className="md:hidden bg-white border-gray-100 py-4">
             <div className="container mx-auto px-4 space-y-4">
                  {
                  navlinks.map((link,index) => (
                 <a 
                 key={index}
                  onClick={()=>{
                    setActiveLink(link.href)
                    setisMenuOpen(false)
                  }}

                 className={`block text-sm font-medium py-2
                  ${ activeLink === link.href ? "text-blue-600 after:w-full":"text-gray-600 hover:text-gray-900"}`}href={link.href}>{link.label}</a>
                  ))
                  }
                  <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                      <a href="#newsletter">Get in touch</a>
                    </button>
             </div>
           </div>
        )
      }
  </motion.nav>
}

export default Navbar;