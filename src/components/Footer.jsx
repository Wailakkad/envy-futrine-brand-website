import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const WebsiteFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'categories', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-gray-50 py-16 px-6 border-t border-gray-200">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-2xl font-light tracking-wider text-black">envy</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              At Envy, we believe furniture should be more than just functional
              —it should inspire. Born from a passion for timeless design
            </p>

            {/* Social Links */}
            <div>
              <h4 className="text-black font-medium mb-4">Social Links</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={16} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={16} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          {[1, 2, 3].map((columnIndex) => (
            <motion.div key={columnIndex} variants={itemVariants}>
              <h4 className="text-black font-medium mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={`${columnIndex}-${index}`}>
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-300 text-sm"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Envy Collections. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-black transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default WebsiteFooter;