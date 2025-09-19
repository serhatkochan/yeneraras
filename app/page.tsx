import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MediaSection from './components/MediaSection';
import GallerySection from './components/GallerySection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StorySection />
        <MediaSection />
        <GallerySection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
