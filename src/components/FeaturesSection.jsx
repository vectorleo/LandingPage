import { motion } from "framer-motion"
import { fadeIn,textVariant } from "../utils/motion";


function FeaturesSection() {

   const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

  return (
    <section className="max-w-7xl px-4 py-16 mx-auto">
        {/* heading text */}
        <div className="text-center mb-12">
          <motion.h2 
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView='show'
          className="text-3xl font-bold mb-2">How can we help your business?</motion.h2>
          <motion.p 
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView='show'
          className="text-gray-600">When you resell Shares, you build trust and increase</motion.p>
        </div>

        {/* feature box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {
            features.map((features,index)=>(
              <motion.div
                variants={fadeIn('down',0.4)}
                initial="hidden"
                whileInView='show' 
              key={index} className="flex flex-col items-center p-6">
                <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" style={{
                  backgroundColor: index === 0 ? '#F1EFF0':  index === 1 ? '#FEE7E7': '#FFF3E4'
                }}>
                  <div className="text-3xl">{features.icon}</div>
                </div>
                <h3 className="text-2xl font-medium mb-3">{features.title}</h3>
                <p className="text-gray-600 text-center">{features.description}</p>
              </motion.div>
            ))
          }
        </div>


        {/* button */}
        <div className="text-center mt-16 ">
          <motion.button
                variants={fadeIn('up',0.5)}
                initial="hidden"
                whileInView='show' 
           className="bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-full font-medium
           hover:bg-blue-700 transition-colors relative">Become a Partner
           <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-lg top-0 left-0 "></div>
           
           </motion.button>
           
        </div>


    </section>
  )
}

export default FeaturesSection