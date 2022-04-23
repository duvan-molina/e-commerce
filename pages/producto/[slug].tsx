import ProductScreen from "@modules/product/screens/product.screen";
import ContainerComponent from "@shared/components/Container";
import { useRouter } from "next/router";

const Product: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ContainerComponent>
      <ProductScreen slug={slug as string} />
    </ContainerComponent>
  );
};

export default Product;
