import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c71?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I've been searching for the perfect statement sofa for months, and Envy's Vestige collection exceeded all expectations. The velvet upholstery is exquisite, luxurious to touch and the craftsmanship is impeccable."
    },
    {
      id: 2,
      name: "David H.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I've been searching for the perfect statement sofa for months, and Envy's Vestige collection exceeded all expectations. The velvet upholstery is exquisite, luxurious to touch and the craftsmanship is impeccable."
    },
    {
      id: 3,
      name: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I've been searching for the perfect statement sofa for months, and Envy's Vestige collection exceeded all expectations. The velvet upholstery is exquisite, luxurious to touch and the craftsmanship is impeccable."
    },
    {
      id: 4,
      name: "Michael K.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      text: "I've been searching for the perfect statement sofa for months, and Envy's Vestige collection exceeded all expectations. The velvet upholstery is exquisite, luxurious to touch and the craftsmanship is impeccable."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], displayIndex: i });
    }
    return visible;
  };

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.div variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              What our clients
              <br />
              <span className="block">said</span>
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-4"
            variants={titleVariants}
          >
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Avatar and Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    {/* Star Rating */}
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center gap-2 mt-12"
          variants={titleVariants}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;