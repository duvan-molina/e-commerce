import ProductsContainer from "@shared/containers/products";
import ContainerComponent from "@shared/components/Container";
import { productsList } from "data";

const products: React.FC = () => {
  return (
    <ContainerComponent>
      <h2 className="mb-6 mt-6 text-center md:mt-12 font-bold text-2xl text-main">
        Nuestros Productos
      </h2>
      <ProductsContainer cols={5} products={productsList} />
    </ContainerComponent>
  );
};

export default products;
