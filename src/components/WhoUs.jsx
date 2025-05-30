import React from 'react';
import { motion } from 'framer-motion';

const AboutEnvy = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight"
            >
              About Envy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              At Envy, we believe furniture should be more than just functional—it should inspire. Born from a passion for exceptional design and craftsmanship, our collections blend contemporary aesthetics with unmatched comfort, turning houses into homes.
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl relative overflow-hidden">
                <div className="absolute top-4 right-4 w-24 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl transform rotate-12"></div>
                <div className="absolute bottom-2 left-4 w-20 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl transform -rotate-6"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Chair Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-3xl p-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Modern Chair Design"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed">
                Every piece in our curated collection is chosen for its quality, sustainability, and ability to elevate your living space—whether it's a statement piece for your apartment or a sprawling estate. Envy offers designs that spark admiration—because you deserve to live beautifully.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              500+
            </motion.h3>
            <p className="text-gray-600 font-medium">Premium Products</p>
          </div>
          
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              10K+
            </motion.h3>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              15+
            </motion.h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              50+
            </motion.h3>
            <p className="text-gray-600 font-medium">Global Partners</p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-serif text-gray-800 italic leading-relaxed"
            >
              "We don't just create furniture; we craft experiences that transform spaces into sanctuaries of style and comfort."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 font-medium"
            >
              — Envy Design Team
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutEnvy;