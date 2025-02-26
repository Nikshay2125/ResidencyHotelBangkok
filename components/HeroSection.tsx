import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "/src/images/hero/main_photo.webp",
  },
  {
    image: "/src/images/hero/epicurean_delight.webp",
    title: "Epicurean Delight",
    subtitle: "Luxurious cuisine, refined atmosphere, savor every moment.",
  },
  {
    image: "/src/images/hero/luxury_stays.webp",
    title: "Luxury Stays",
    subtitle: "Experience unparalleled hospitality",
  },
  {
    image: "/src/images/hero/voyafers_vista.webp",
    title: "Voyager's Vista",
    subtitle: "Spa serenity, cruise dining, thrilling safari, mesmerizing ocean world.",
  },
  {
    image: "/src/images/hero/companionship.webp",
    title: "Circle of Companionship",
    subtitle: "Where guests turn friends, bonds flourish, and memories linger.",
  }
];

// Cloning first and last slides for smooth looping
const extendedSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0]
];

const HeroSection = () => {
  const [current, setCurrent] = useState(1); // Start at the first original slide
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideInterval = useRef(null);
  const transitionDuration = 700;

  useEffect(() => {
    startSlideInterval();
    return () => clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    // Infinite loop fix with smooth transition
    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(slides.length);
      }, transitionDuration);
    }
    if (current === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, transitionDuration);
    }
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }, [current]);

  const startSlideInterval = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 2500);
  };

  const goToNextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const goToPrevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNextSlide();
    }

    if (touchStart - touchEnd < -50) {
      goToPrevSlide();
    }

    startSlideInterval();
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700" : ""}`}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center text-center h-full">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-sans text-white">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index + 1 === current ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
