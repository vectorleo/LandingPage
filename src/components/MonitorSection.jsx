import monitorImage from "../assets/monitor-card.webp"
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";

const MonitorSection = ()=>{
  return(
    <section className=" max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ">

        {/* left section */}
        <motion.div
          variants={fadeIn('right',0.4)}
          initial="hidden"
          whileInView='show'
         className="md:w-1/2 w-full">
          <p className="text-teal-500 font-semibold">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6 md:w-4/5">Intoducing best mobile
             <br /> carousels</h2>

          <p className="text-gray-600 mb-8">Control of your time and boost productivity with our intelligent Monitoring system.
            Automate appointments, manage team avalability, and deliver Exceptional expriences.
          </p>

          <a href="#" className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">Explore Monitoring features
            <i className="fa-solid fa-arrow-right size-3 items-center"></i>
          </a>
        </motion.div>
        


        {/* right section */}
        <motion.div 
          variants={fadeIn('left',0.4)}
          initial="hidden"
          whileInView='show'
        className="w-full md:w-1/2">
          <img src={monitorImage} alt="stats.webp" className="w-full h-auto" />
        </motion.div>

      </div>
    </section>
  )
}

export default MonitorSection;