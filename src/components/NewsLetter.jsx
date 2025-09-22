import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";


function NewsLetter() {
  return(
    <section className="Container mx-auto px-4 sm:px-6 lg:px-8 py-16 " id="newsletter">
          <motion.div
           variants={fadeIn('right',0.4)}
           initial="hidden"
           whileInView='show'
          className="bg-blue-600 rounded-2xl overflow-hidden">
            <div className="relative md:px-16 py-16 px16 md:py24">
               {/* graident */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>


              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="text-white max-w-lg text-center md:text-left ">
                  <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">Subscribe Newsletter</h2>
                  <p className="text-blue-100 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                  <input type="text" placeholder="Eneter your Email address"
                  className=" bg-white w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none
                  focus:outline"/>
                  <button className="cursor-pointer w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4
                   rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center gap-2">
                    <span>Discover</span>
                    <i className="fa-solid fa-arrow-right  size-3"></i>
                  </button>
                </div>
              </div>
              
            </div>
          
          </motion.div>

          <style>
            {


            `.clip-path-slant{
              clip-path:polygon(20%,0%,100%,0%,100%,100%,0% 100%)
            }`
            
            }
          </style>
    </section>
  )
}

export default NewsLetter