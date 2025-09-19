'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoSeeking, setIsVideoSeeking] = useState(false);

  // Random rotation değerleri
  const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

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

  // Video event handlers
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    // Sadece gerçekten duraklatıldığında object-cover'a geç
    if (!isVideoSeeking) {
      setIsVideoPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoSeeking = () => {
    setIsVideoSeeking(true);
  };

  const handleVideoSeeked = () => {
    setIsVideoSeeking(false);
    // Seek işlemi bittikten sonra video hala oynatılıyorsa object-contain'da kalsın
    // Eğer video duraklatılmışsa object-cover'a geçsin
  };

  // Photo Component
  const Photo = ({ imageNumber, idx }: { imageNumber: number; idx: number }) => {
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
        className="relative aspect-[4/5] w-44 flex-none overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg select-none"
      >
        <img
          src={`/images/${imageNumber}.jpg`}
          alt={`Yener Aras - Resim ${imageNumber}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
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

      {/* Video Section */}
      <motion.div 
        className="mb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl">
            <video
              className={`w-full h-full transition-all duration-300 ${
                isVideoPlaying ? 'object-contain' : 'object-cover'
              }`}
              controls
              preload="metadata"
              poster="/images/video-poster.jpg"
              playsInline
              muted
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnded}
            >
              <source src="/images/video.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
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
