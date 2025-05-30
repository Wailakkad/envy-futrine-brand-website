import { useState , useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const TopCatalogue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Wooden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Furniture"
    },
    {
      id: 2,
      name: "Sculptural Wooden",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Chair"
    },
    {
      id: 3,
      name: "Sculptural Wooden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Seating"
    },
    {
      id: 4,
      name: "Sculptural Wooden",
      image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Modern"
    },
    {
      id: 5,
      name: "Sculptural Wooden",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Design"
    },
    {
      id: 6,
      name: "Sculptural",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Premium"
    },
    {
      id: 7,
      name: "Modern Chair",
      image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Contemporary"
    },
    {
      id: 8,
      name: "Luxury Seating",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Luxury"
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Top Catalogue
          </h2>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex >= maxIndex 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${(products.length / itemsPerView) * 100}%` }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / products.length}%` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-square"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      >
                        <motion.button
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-100 to-orange-100 p-8 md:p-12">
            <div className="relative z-10">
              <p className="text-sm font-medium text-amber-800 mb-2">FROM STYLISH SECTIONALS</p>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Comfy Lounging
              </h3>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Explore Collection
              </button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Comfy Lounging"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-200 to-gray-300 p-8 md:p-12">
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-700 mb-2">SALE UP TO 30% OFF ALL ITEMS</p>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Scandinavian Style
              </h3>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Explore Collection
              </button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Scandinavian Style"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Explore All
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCatalogue;