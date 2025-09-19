'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Random rotation değerleri
  const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

  // Resim açıklamaları - siz buraya kendi açıklamalarınızı ekleyebilirsiniz
  const imageDescriptions: { [key: number]: string } = {
    1: "1. resim açıklaması",
    2: "2. resim açıklaması",
    3: "3. resim açıklaması",
    4: "4. resim açıklaması",
    5: "5. resim açıklaması",
    6: "6. resim açıklaması",
    7: "7. resim açıklaması",
    8: "8. resim açıklaması",
    9: "9. resim açıklaması",
    10: "10. resim açıklaması",
    11: "11. resim açıklaması",
    12: "12. resim açıklaması",
    13: "13. resim açıklaması",
    14: "14. resim açıklaması",
    15: "15. resim açıklaması",
    16: "16. resim açıklaması",
    17: "17. resim açıklaması",
    18: "18. resim açıklaması",
    19: "19. resim açıklaması",
    20: "20. resim açıklaması",
    21: "21. resim açıklaması",
    22: "22. resim açıklaması",
    23: "23. resim açıklaması",
    24: "24. resim açıklaması",
    25: "25. resim açıklaması",
    26: "26. resim açıklaması",
    27: "27. resim açıklaması",
    28: "28. resim açıklaması",
    29: "29. resim açıklaması",
    30: "30. resim açıklaması",
    31: "31. resim açıklaması",
    32: "32. resim açıklaması",
    33: "33. resim açıklaması",
    34: "34. resim açıklaması",
    35: "35. resim açıklaması",
    36: "36. resim açıklaması",
    37: "37. resim açıklaması",
    38: "38. resim açıklaması",
    39: "39. resim açıklaması"
  };

  // Drag & Drop functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;
      const x = e.pageX - (sliderRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5; // Sürükleme hızı
      sliderRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Photo Component
  const Photo = ({ imageNumber, idx }: { imageNumber: number; idx: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleTouchStart = () => {
      setIsVisible(true);
    };

    const handleTouchEnd = () => {
      // Mobilde biraz gecikme ile kapat
      setTimeout(() => setIsVisible(false), 300);
    };

    return (
      <motion.div
        key={imageNumber}
        initial={{
          scale: 1,
          rotate: possibleRotations[idx % possibleRotations.length],
          opacity: 1,
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 0, 
          transition: { duration: 0.2 } 
        }}
        onHoverStart={() => setIsVisible(true)}
        onHoverEnd={() => setIsVisible(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-[4/5] w-44 flex-none overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg select-none"
      >
        <img
          src={`/images/${imageNumber}.jpg`}
          alt={`Yener Aras - Resim ${imageNumber}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full bg-gradient-to-t from-black/75 via-black/0 flex items-end"
            >
              <h3 className="px-3 py-2 font-mono text-xs font-bold text-white bg-gradient-to-r from-black/80 to-black/60 rounded">
                {imageDescriptions[imageNumber] || `Resim ${imageNumber}`}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section id="galeri" className="py-20 bg-[#0a0a0a] relative">
      {/* Üst gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none"></div>
      
      {/* Başlık */}
      <motion.div 
        className="text-center mb-12 px-4 select-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight">
          Galeri
        </h1>
      </motion.div>
      
      {/* Galeri Container - Mobilde tam ekran */}
      <motion.div 
        className="w-full select-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div
          ref={sliderRef}
          className="hide-scrollbar flex gap-8 overflow-x-auto py-4 px-0 md:px-8 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          style={{ userSelect: "none" }}
        >
          {Array.from({ length: 39 }, (_, i) => i + 1).map((imageNumber, index) => (
            <Photo
              key={imageNumber}
              imageNumber={imageNumber}
              idx={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
