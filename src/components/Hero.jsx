import heroimage from "../assets/hero-image.png"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section  id="home"className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 px-4 sm:px-6 lg:px-8">
      {/* left */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* star badge */}
        <motion.div
          variants={fadeIn('right',0.2)}
          initial="hidden"
          whileInView='show'
        >
          <div
            className="flex items-center gap-2 bg-gray-50 w-fit py-2 px-4 rounded-full hover:bg-gray-100 transition-colors
            cursor-pointer group"
          >
            <i className="fa-solid fa-star text-blue-600 group-hover:scale-110 transition-transform"></i>
            <span className="text-sm font-medium">jump start your growth</span>
          </div>
        </motion.div>
        {/* headind */}
        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView='show'
        className="text-4xl md:text-5xl  leading-tight font-bold">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
          Companies
          <span className="animate-pulse inline-block ml-2">⏰</span>
        </motion.h1>
        {/* paragraph */}
        <motion.p
          variants={fadeIn('up',0.4)}
          initial="hidden"
          whileInView='show'
          className="text-gray-600 text-lg md:text-xl max-w-xl">
          get the most accurate leads, sales people training and conversions,
          toold snd more- all within the same one billing.
        </motion.p>

        <motion.div
          variants={fadeIn('right',0.5)}
          initial="hidden"
          whileInView='show'
          className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email adress"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none
        focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </motion.div>
      </div>

      {/* right */}
      <motion.div
        variants={fadeIn('left',0.2)}
        initial="hidden"
        whileInView='show'
       className="w-full md:w-1/2 \ mt-16 md:mt-0 pt-0 md:pl-12">
      <div className="relative ">
        <img src={heroimage} alt="hero image" className=" rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
      </div>
      </motion.div>
    </section>
  );
};

export default Hero;
