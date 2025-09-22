import { motion } from "framer-motion";
import { textVariant,fadeIn } from "../utils/motion";
import { div } from "framer-motion/client";


const PurposeSection = () =>{
 
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return(
    <section id="about" className="w-full bg-gray-50 px-4 py-16 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView='show'
         className="grid md:grid-cols-3 grid-cols-1 gap-8">

          {/* heading text */}
          <motion.div
            variants={fadeIn("right",0.3)}
            initial="hidden"
            whileInView='show'
           className="">
            <p className="text-sm text-purple-600 font-medium">ACHIEVE MORE</p>
            <h2 className="text-3xl md:w-4/5 md:text-4xl font-bold text-slate-900">Purpose of Convoy is to keep your team</h2>
          </motion.div>

          {/* bullet points */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8 ">
            {
              features.map((features,index)=>(
                <div key={index} className="flex items-start space-x-4">
                  <motion.div 
                    variants={fadeIn("left",0.4)}
                    initial="hidden"
                    whileInView='show'
                  className="w-12 h-12 flex items-center justify-start rounded-lg">{features.icon}</motion.div>
                  <motion.div
                    variants={fadeIn("left",0.5)}
                    initial="hidden"
                    whileInView='show'
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{features.title}</h3>
                    <p className="text-slate-600">{features.description}</p>
                  </motion.div>
                </div>
              ))
            }
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default PurposeSection