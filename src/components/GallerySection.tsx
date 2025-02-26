import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = [
    "/src/images/gallery/gallery1.jpg",
    "/src/images/gallery/gallery2.jpg",
    "/src/images/gallery/gallery3.jpg",
    "/src/images/gallery/gallery4.jpg",
    "/src/images/gallery/gallery5.jpg",
    "/src/images/gallery/gallery6.jpg",
    "/src/images/gallery/gallery7.jpg",
    "/src/images/gallery/gallery8.jpeg",
    "/src/images/gallery/gallery9.jpg"
  ];

  return (
    <section id="gallery" className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Gallery Grandeur</h2>
          <p className="text-muted-foreground font-sans">
          Explore our hotel’s elegance through captivating images.
          </p>
        </div>
    <PhotoProvider>
      <div className="w-full">
        {/* Small Thumbnail Slider */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="rounded-lg shadow-lg"
          style={{ height: "400px" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <PhotoView src={src}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer rounded-lg"
                />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fullscreen Slideshow */}
        <PhotoProvider>
          <div className="hidden">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <img src={src} alt={`Slide ${index + 1}`} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </PhotoProvider>
    </div>
    </section>
  );
};

export default Gallery;
