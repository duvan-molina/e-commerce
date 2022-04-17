import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      ssr
      showDots
      arrows={false}
      responsive={responsive}
      infinite
      className=""
      dotListClass="custom-dot-list-style"
    >
      <div className="w-full h-[15rem] md:h-[30rem]">
        <img
          className="w-full h-full object-cover"
          src="https://assets.jumpseller.com/store/alce-riders/themes/277895/options/21139120/Febrero-14-2022-Maverick-long.png?1647553614"
          alt=""
        />
      </div>
      <div className="w-full h-[15rem] md:h-[30rem]">
        <img
          className="w-full h-full object-cover"
          src="https://assets.jumpseller.com/store/alce-riders/themes/277895/options/21139127/Febrero-12-2022-Lagarto.png?1647553615"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
