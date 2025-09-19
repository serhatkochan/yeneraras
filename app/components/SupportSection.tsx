'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="hedefler" className="py-20 px-4 bg-[#000000] relative">
    {/* Üst gradient overlay */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900/40 pointer-events-none"></div>
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20"
        style={{ backgroundImage: "radial-gradient(closest-side at 50% 50%, #1f2937, #111418, #000000)" }}>
        <div className="flex flex-col max-w-5xl flex-1">
          <motion.div 
            ref={ref}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Neden Desteğinize İhtiyacım Var?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              Hayatım, engelleri aşarak hedeflere ulaşmanın bir hikayesi. Şimdi en büyük hayalime doğru ilerliyorum: 2028 Los Angeles Paralimpik Oyunları'nda ülkemi temsil etmek. Bu yolculukta yanımda olmanız, bana sadece maddi değil, manevi güç de verecektir.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col items-center text-center p-6 story-card rounded-lg">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16 mb-4">
                <span className="material-symbols-outlined text-4xl">emoji_events</span>
              </div>
              <h3 className="text-white text-xl font-bold leading-normal mb-2">Ekipman</h3>
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                Yüksek performanslı tekerlekli sandalyeler, özel antrenman ekipmanları ve yarış kıyafetleri, başarıya giden yolda en büyük destekçilerim. Bu ekipmanlar, sadece performansımı bir üst seviyeye taşımakla kalmıyor, aynı zamanda sakatlanma riskimi de en aza indirerek en iyi halimi ortaya koymamı sağlıyor.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 story-card rounded-lg">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16 mb-4">
                <span className="material-symbols-outlined text-4xl">fitness_center</span>
              </div>
              <h3 className="text-white text-xl font-bold leading-normal mb-2">Antrenman ve Yarışlar</h3>
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                Profesyonel antrenörler, fizyoterapistler ve beslenme uzmanları... her biri, zirveye giden yolda en büyük destekçilerim. Onlarla birlikte yaptığımız düzenli kamplar ve katıldığımız yarışlar, hem performansımı sürekli olarak artırmamı hem de rekabetçi gücümü korumamı sağlıyor.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 story-card rounded-lg">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16 mb-4">
                <span className="material-symbols-outlined text-4xl">favorite</span>
              </div>
              <h3 className="text-white text-xl font-bold leading-normal mb-2">Sağlık ve Rehabilitasyon</h3>
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                Profesyonel bir sporcu için sağlıklı bir beden ve zihin, en büyük sermayedir. Düzenli sağlık kontrolleri, tedavi ve rehabilitasyon giderleri, hem fiziksel hem de zihinsel sağlığımı korumak için hayati bir önem taşıyor. Bu sayede, performansımı en üst seviyede tutabiliyor ve gelecekteki hedeflerime daha sağlam adımlarla ilerliyorum.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Sponsorluk Karşılığında Neler Sunuyorum?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
              Sponsorluğunuz, sadece benim hedefime ulaşmama yardımcı olmakla kalmayacak, aynı zamanda markanız için de önemli faydalar sağlayacak:
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-start md:items-center gap-6 p-6 story-card rounded-lg flex-col md:flex-row">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16">
                <span className="material-symbols-outlined text-4xl">campaign</span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold leading-normal">Marka Görünürlüğü</h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed mt-1">
                  Sadece bir sporcu değil, bir medya figürü olarak da sürekli aktifim. Başarılarım, medya röportajlarım ve online platformlardaki içeriklerimle markanız, sürekli olarak geniş kitlelere tanıtılacak.
                </p>
              </div>
            </div>

            <div className="flex items-start md:items-center gap-6 p-6 story-card rounded-lg flex-col md:flex-row">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16">
                <span className="material-symbols-outlined text-4xl">handshake</span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold leading-normal">İlham Veren Bir Hikayenin Parçası Olun</h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed mt-1">
                  Benim hikayem, azmin, inancın ve engelleri aşmanın bir sembolü. Bu yolculuğun bir parçası olarak, markanızın sosyal sorumluluk projelerine değer katacak ve insanlara ilham verecek anlamlı bir misyonun parçası olacaksınız.
                </p>
              </div>
            </div>

            <div className="flex items-start md:items-center gap-6 p-6 story-card rounded-lg flex-col md:flex-row">
              <div className="text-[var(--primary-color)] flex items-center justify-center rounded-full bg-[#283039] shrink-0 size-16">
                <span className="material-symbols-outlined text-4xl">groups</span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold leading-normal">Hedef Kitleyle Bağlantı</h3>
                <p className="text-gray-400 text-base font-normal leading-relaxed mt-1">
                  Spor, tutku ve azim... benimle özdeşleşen tüm bu değerler, markanızın hedef kitlesiyle bağ kurmasında en büyük gücü olacak. Benim hikayeme ve başarıma duyulan güven, markanızın sadakatini de en üst seviyeye taşıyacak.
                </p>
              </div>
            </div>

          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
              Bu yolculukta bana ortak olun. Birlikte, sadece benim hayallerimi gerçekleştirmekle kalmayacak, aynı zamanda sporun ilham veren gücüyle topluma dokunacağız. Gelin, 2028 Los Angeles Paralimpik Oyunları'nda ülkemizi gururlandırmak için el ele verelim.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <a
              className="flex h-14 w-auto items-center justify-center gap-3 rounded-full bg-green-500 px-8 text-white text-lg font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              href="https://wa.me/905387640541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,40.23a103.26,103.26,0,0,0-146,0,103.26,103.26,0,0,0,0,146L40.23,216,70,186.22a103.32,103.32,0,0,0,146,0A103.26,103.26,0,0,0,216,40.23ZM128,216a87.34,87.34,0,0,1-44.49-12.83L56,216l12.83-27.51A87.34,87.34,0,1,1,128,216Zm48.24-74.12c-3.1-1.54-18.33-9-21.17-10s-5,1.54-7.55,4.63-8.75,11-10.73,13.14-4,2.31-7.05.77-12.43-4.58-23.68-14.62-18.59-22.18-17.59-25.26,2.82-4.24,4.24-5.78,2.31-3.85,3.85-6.42.77-5-1.54-7.55-10-24.08-13.88-33s-6.17-6.94-8.75-7.7A25.86,25.86,0,0,0,76,72.4c-4.63,0-8,2.31-10,5.39S56.6,88.48,59.34,95.4c4.63,11.56,16.19,29.3,18.5,32.38,2.31,3.08,13.88,22.21,34.69,30.84,16.95,7,21.21,6.17,25.26,5.39s13.1-5.39,15.42-10.79,1.54-9.25.77-10.79S179.34,143.42,176.24,141.88Z"></path>
              </svg>
              <span>WhatsApp'tan Ulaşın</span>
            </a>
            <p className="text-gray-500 text-sm mt-6">veya diğer kanallardan iletişime geçin</p>
          </div>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <a
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
              href="mailto:yener.aras@hotmail.com"
            >
              <span className="material-symbols-outlined text-gray-400">
                mail
              </span>
              <span>yener.aras@hotmail.com</span>
            </a>
            <div className="flex gap-5 mt-4">
              <a
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
                href="https://instagram.com/arasyenerx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,0,96,48,48,0,0,0,0-96Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
                href="https://youtube.com/@arasyenerx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498,6.186a3.016,3.016,0,0,0-2.122-2.136C19.505,3.545,12,3.545,12,3.545s-7.505,0-9.377.505A3.017,3.017,0,0,0,.502,6.186C0,8.07,0,12,0,12s0,3.93.502,5.814a3.016,3.016,0,0,0,2.122,2.136c1.871.505,9.376.505,9.376.505s7.505,0,9.377-.505a3.015,3.015,0,0,0,2.122-2.136C24,15.93,24,12,24,12S24,8.07,23.498,6.186ZM9.545,15.568V8.432L15.818,12Z"></path>
                </svg>
              </a>
              <a
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
                href="https://tiktok.com/@arasyenerx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59,6.69a4.83,4.83,0,0,1-3.77-4.25V2h-3.45v13.67a2.89,2.89,0,0,1-5.2,1.74,2.89,2.89,0,0,1,2.31-4.64,2.93,2.93,0,0,1,.88.13V9.4a6.84,6.84,0,0,0-1-.05A6.33,6.33,0,0,0,5,20.1a6.34,6.34,0,0,0,10.86-4.43v-7a8.16,8.16,0,0,0,4.77,1.52v-3.4A4.85,4.85,0,0,1,19.59,6.69Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
