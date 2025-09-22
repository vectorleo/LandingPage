import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";

function PricingSection() {
  const [ProductCount, setProductCount] = useState(1);

  // cal product price
  const starterPrice = Math.round(4000 * (ProductCount / 50));
  const BusinessPrice = Math.round(7500 * (ProductCount / 50));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView='show'
         className="text-center font-bold text-3xl md:text-4xl mb-16">
          Pricing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* starter */}
          <motion.div
            variants={fadeIn("up",0.3)}
          initial="hidden"
          whileInView='show'
          className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
          </motion.div>
          {/* business */}
          <motion.div
            variants={fadeIn("up",0.3)}
          initial="hidden"
          whileInView='show'
          className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">${BusinessPrice}/mo</p>
          </motion.div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            {ProductCount} Products
          </p>

          <div className="relative px-4 ">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-500">1</span>
              <input
                type="range"
                className="flex-1 h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer  "
                min={1}
                max={50}
                value={ProductCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-500">50</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4 text-center ">Ready to get started?</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
