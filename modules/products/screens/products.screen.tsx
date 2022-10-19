import ProductsContainer from "@shared/containers/products";
import ContainerComponent from "@shared/components/Container";
import { productsList } from "data";

const products: React.FC<{ search?: string }> = ({ search }) => {
  const products = search
    ? productsList.filter((product) => product.isOffer)
    : productsList;

  return (
    <ContainerComponent>
      <h2 className="mb-6 mt-6 text-center md:mt-12 font-bold text-2xl text-main">
        {search ? "Productos En Oferta" : "Nuestros Productos"}
      </h2>
      <ProductsContainer cols={5} products={products} />
    </ContainerComponent>
  );
};

export default products;
