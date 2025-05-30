import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Truck, Award, RotateCcw, Headphones } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample background images - replace with your actual images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImages[currentSlide]})`,
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-800 rounded-sm" />
          </div>
          <span className="text-white font-semibold text-xl tracking-wider">ENVY</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-full px-8 py-3">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">HOME</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">SHOP</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">PRODUCT</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">ABOUT</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">BLOG</a>
        </nav>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Contact us
        </motion.button>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            The Art of Modern
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl">Interior Living</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your space with our curated collection of modern furniture and timeless design pieces
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-lg"
            >
              Watch Story
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft size={24} />
        </motion.button>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Bottom Features */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute w-full bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-130 bg-black/80 backdrop-blur-sm"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 py-6">
          <div className="flex items-center space-x-3 text-white">
            <Truck size={24} />
            <div>
              <p className="font-semibold">Free Shipping</p>
              <p className="text-sm text-white/70">Over $50</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <Award size={24} />
            <div>
              <p className="font-semibold">Quality Assurance</p>
              <p className="text-sm text-white/70">Premium Materials</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <RotateCcw size={24} />
            <div>
              <p className="font-semibold">Return within</p>
              <p className="text-sm text-white/70">14 days</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <Headphones size={24} />
            <div>
              <p className="font-semibold">Support</p>
              <p className="text-sm text-white/70">24/7</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;