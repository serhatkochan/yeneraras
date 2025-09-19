'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const MediaSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!carousel || !prevBtn || !nextBtn) return;

    const scrollAmount = 408; // w-96 (384px) + mr-6 (24px)

    const updateButtons = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft <= 0) {
        prevBtn.classList.add('hidden');
      } else {
        prevBtn.classList.remove('hidden');
      }
      if (carousel.scrollLeft >= maxScrollLeft - 1) {
        nextBtn.classList.add('hidden');
      } else {
        nextBtn.classList.remove('hidden');
      }
    };

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    carousel.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();

    return () => {
      carousel.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  return (
  <section id="medya" className="py-20 px-4 bg-[#111111] relative">
    {/* Üst gradient overlay */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/90 via-black/30 to-transparent pointer-events-none"></div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            ref={ref}
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Medyada Ben
            </h1>
            <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
             Bugüne kadar yaptığım röportajlar ve hakkımda çıkan haberler, yolculuğumu anlatan önemli parçalar. İşte medyada yer aldığım bazı içerikler.
            </p>
          </motion.div>

          {/* Featured Video */}
          <motion.section 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.youtube.com/embed/WT_J_UexALg?si=dkE85UzUuf3qSxGA"
                  title="YouTube video player"
                />
              </div>
              <div className="lg:pl-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Öne Çıkan</h2>
                <h3 className="text-4xl font-bold text-white mb-4">Yener Aras'ın Hikayesi</h3>
                <p className="text-gray-400 text-lg">
                'Kim Milyoner Olmak İster?'de yer aldığım bu özel bölüm, sadece bir yarışma değil, aynı zamanda hayatımın en önemli dönüm noktasını anlatan bir kesit. Kazadan sonraki dönüşümümü ve 2028 Paralimpik Oyunları hedefimi bu videoda izleyebilirsiniz.
                </p>
              </div>
            </div>
          </motion.section>

          {/* News Cards */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Diğer <span className="text-gray-300">İçerikler</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a className="news-card" href="https://demokratkocaeli.com/haber/20185387/milli-atlet-yener-arasin-solun-hizmeti-girdi" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Demokrat Kocaeli</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">2024</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  Milli Atlet Yener Aras'ın Solun Hizmeti Girdi
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
              
              <a className="news-card" href="https://www.cagdaskocaeli.com.tr/haber/4716943/genc-atletler-balkan-sampiyonasinda" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Çağdaş Kocaeli</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">2024</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  Genç Atletler Balkan Şampiyonası'nda
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
              
              <a className="news-card" href="https://www.fanatik.com.tr/para-kurekci-yener-arasin-buyuk-hayali-2592755" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Fanatik</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">29.08.2025</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  Para Kürekçi Yener Aras'ın Büyük Hayali
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
              
              <a className="news-card" href="https://www.hurriyet.com.tr/yerel-haberler/kocaeli/eyof-a-kocaelili-iki-sporcu-katilacak-37146672" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Hürriyet</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">24.07.2015</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  EYOF'a Kocaelili İki Sporcu Katılacak
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
              
              <a className="news-card" href="https://www.takvim.com.tr/spor/2025/08/29/para-kurekci-yener-aras-2028i-istiyor" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Takvim</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">29.08.2025</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  Para Kürekçi Yener Aras 2028'i İstiyor
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
              
              <a className="news-card" href="https://www.ahaber.com.tr/video/televizyon-videolari/azmiyle-ornek-oldu-cekilmek-istemiyorum-diyerek-riske-girdi" target="_blank" rel="noopener noreferrer">
                <div className="mb-4 flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">A Haber</h4>
                  <p className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/70 to-gray-600/50 px-2 py-1 rounded-full">2024</p>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-white flex-grow">
                  Azmiyle Örnek Oldu: "Çekilmek İstemiyorum" Diyerek Riske Girdi
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  Detayları Gör <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </a>
            </div>
        </motion.section>
      </div>
      
    </div>
  </section>
  );
};

export default MediaSection;
