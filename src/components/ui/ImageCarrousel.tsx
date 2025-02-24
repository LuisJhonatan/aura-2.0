import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Landscape',
    description: 'Serene mountain views at sunset'
  },
  
  {
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'Forest Path',
    description: 'A mystical path through an ancient forest'
  },
  {
    url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching to the horizon'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => {
          let offset = index - currentIndex;
          if (offset < 0) offset += images.length;
          
          const opacity = offset === 0 ? 1 : 0.5;
          const scale = offset === 0 ? 1 : 0.8;
          const zIndex = offset === 0 ? 20 : 10;
          
          let translateX = '0%';
          if (offset === 1 || offset === -3) translateX = '100%';
          if (offset === 2 || offset === -2) translateX = '0%';
          if (offset === 3 || offset === -1) translateX = '-100%';

          return (
            <div
              key={index}
              className="absolute w-full max-w-2xl transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  <p className="text-white/80 mt-2">{image.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full z-30 transition-all hidden md:inline"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full z-30 transition-all hidden md:inline"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;