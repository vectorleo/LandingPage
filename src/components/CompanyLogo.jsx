import slack from "../assets/slack.png"
import amzon from "../assets/amazon.png"
import meundies from "../assets/meundies.png"
import woocommerce from "../assets/woocommerce.png"
import sitepoint from "../assets/sitepoint.png"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion";


const CompanyLogo = () =>{
  const logo = [slack,amzon,meundies,sitepoint,woocommerce]
  return(
    <motion.div
     variants={fadeIn('down',0.2)}
     initial="hidden"
     whileInView='show'
     className="w-full container overflow-hidden mx-auto py-20 flex sm:flex-row flex-col gap-8 sm:items-center items-start">
      <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-600 bg-white py-2 z-10 text-xl 
      sm:text-base font-semibold text-left px-6">Proud partner at <br /> Hubspot & Segment</div>

      <div className="flex whitespace-nowrap animate-marquee">
        {logo.map((logo,index)=>(
          <img key={index} src={logo} alt="companylogo" className="mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all"/>
        ))} 
        {/* duplicate */}
        {logo.map((logo,index)=>(
          <img key ={`duplicate-${index}`} src={logo} alt="companylogo" className="mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all"/>
        ))} 
      </div>
    </motion.div>

  )
}

export default CompanyLogo;