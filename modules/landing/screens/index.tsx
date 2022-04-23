import TestMonialsContainer from "../containers/testmonials";
import ContainerComponent from "@shared/components/Container";
import Products from "../../shared/containers/products";
import CarouselComponent from "@shared/components/Carousel/carousel";
import Banners from "../containers/banners.container";

const Landing: React.FC = () => {
  return (
    <>
      <div className="mb-6 md:mb-12 bg-lightMain">
        <CarouselComponent />
      </div>
      <ContainerComponent>
        <Banners />
        <div className="mx-auto">
          <h2 className="mb-6 mt-6 text-center sm:text-left md:mt-12 font-bold text-2xl">
            Productos destacados
          </h2>
          <Products />
        </div>
      </ContainerComponent>
      <div className="mx-auto">
        <ContainerComponent>
          <h2 className="mb-6 mt-6 text-center sm:text-left md:mt-12 font-bold text-2xl">
            Testimonios
          </h2>
        </ContainerComponent>
        <TestMonialsContainer />
      </div>
    </>
  );
};

export default Landing;
