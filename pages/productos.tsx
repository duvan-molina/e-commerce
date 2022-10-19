import ProductsScreen from "@modules/products/screens/products.screen";
import { useRouter } from "next/router";

const Productos: React.FC = () => {
  const router = useRouter();
  return <ProductsScreen search={router.query.search as string} />;
};

export default Productos;
