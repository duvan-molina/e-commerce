import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const CarrouselWhitCustom: React.FC<{ images: Array<string> }> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  return (
    <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-2 h-64 sm:h-80 md:h-96"
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={`${image}-${index}`}>
            <img src={image} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setTimeout(() => setThumbsSwiper(swiper), 0)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-20 sm:h-24 md:h-32"
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={`${image}-${index}`}>
            <img src={image} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrouselWhitCustom;
