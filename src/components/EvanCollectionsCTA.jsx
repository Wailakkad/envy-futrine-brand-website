import React from 'react';
import { motion } from 'framer-motion';

const EvanCollectionsCTA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sculptureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
      </div>



      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand name */}
        <motion.div className="mb-12" variants={textVariants}>
          <p className="text-xs font-light tracking-[0.4em] text-white/90 uppercase">
            EVAN COLLECTIONS
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-white mb-8 max-w-4xl mx-auto"
          variants={textVariants}
        >
          <motion.span 
            className="block mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Envy redefines opulence with handcrafted furniture for the
          </motion.span>
          <motion.span 
            className="block font-normal"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            discerning homeowner
          </motion.span>
        </motion.h1>

        {/* CTA Button */}
        <motion.div 
          className="mt-16"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button 
            className="group relative px-10 py-4 bg-black/30 backdrop-blur-sm border border-white/30 text-white font-normal tracking-wider transition-all duration-300 hover:bg-black/50 hover:border-white/50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm uppercase">Learn More</span>
            
            {/* Button shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              animate={{
                translateX: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      </motion.div>


    </section>
  );
};

export default EvanCollectionsCTA;