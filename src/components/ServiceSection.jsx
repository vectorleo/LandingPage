import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";

function ServiceSection() {

  const services = [
    {
      icon: <i className="fa-solid fa-layer-group w-8 h-8 text-indigo-600 text-2xl  "></i>,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <i className="fa-solid fa-lightbulb w-8 h-8 text-amber-400 text-2xl"></i>,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <i className="fa-solid fa-gear w-8 h-8 text-red-400 text-2xl"></i>,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <i className=" fa-solid fa-clock w-8 h-8 text-cyan-400 text-2xl"></i>,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]


  return(
    <section id='services' className="py-20 container mx-auto px-4 sm:px-1 lg:px-8 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* header */}
          <motion.div
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView='show'
            className="md:w-1/3 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">Future of support with new shapes</h2>
            <p className="text-gray-600 text-lg md:w-4/5 mb-4">Discuss your goals, determine success metrics, identify problems</p>


            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex w-5 h-5 justify-center items-center bg-indigo-100 rounded-full">
                  <div className="w-2.5 h-2.5 r bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Ux design content strategy</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex w-5 h-5 justify-center items-center bg-indigo-100 rounded-full">
                  <div className="w-2.5 h-2.5 r bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-600">Development bring</span>
              </div>
            </div>

            <button className="bg-indigo-600 text-white mt-8 px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors">Get Started</button>
          </motion.div>


          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {
              services.map((service,index) =>(
                <motion.div
                    variants={fadeIn("left",0.2)}
                    initial="hidden"
                    whileInView='show'
                    key={index} className="bg-white max-w-72 cursor-pointer rounded-2xl p-4 hover:shadow-xl transition-all duration-300 m-1 hover:scale-105 mx-auto">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href={service.link} className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium">Learn More</a>
                </motion.div>
              ))
            }
          </div>   
        </div>
    </section>
  )
}
export default ServiceSection