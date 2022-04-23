import TestMonialsContainer from "../containers/testmonials";
import ContainerComponent from "@shared/components/Container";
import Products from "../../shared/containers/products";
import CarouselComponent from "@shared/components/Carousel/carousel";
import Banners from "../containers/banners.container";
import SubTitleComponent from "@shared/components/Title";
import { productsList } from "data";

const Landing: React.FC = () => {
  return (
    <>
      <div className="mb-6 md:mb-12 bg-lightMain">
        <CarouselComponent />
      </div>
      <ContainerComponent>
        <Banners />
        <div className="mx-auto">
          <SubTitleComponent title="Productos destacados" />
          <Products products={productsList} />
        </div>
      </ContainerComponent>
      <div className="mx-auto">
        <ContainerComponent>
          <SubTitleComponent title="Testimonios" />
        </ContainerComponent>
        <TestMonialsContainer />
      </div>
    </>
  );
};

export default Landing;
