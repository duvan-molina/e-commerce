import ProductCard from "@shared/components/productCard";
import { useAppDispatch } from "@shared/store/hooks";
import { cartActions } from "@shared/store/modules/cart/cart.slice";
import Link from "next/link";

type Props = {
  cols?: number;
  products: Array<{
    id: string;
    title: string;
    imagen: string;
    price: number;
    slug: string;
  }>;
};

const Products: React.FC<Props> = ({ cols = 4, products }) => {
  const dispatch = useAppDispatch();
  const addProductsCart = (product: {
    id: string;
    title: string;
    price: number;
  }) => {
    dispatch(cartActions.addProduct(product));
  };
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-${cols} gap-4  mx-auto`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          id={product.id}
          title={product.title}
          imagen={product.imagen}
          price={product.price}
          slug={product.slug}
          addProductsCart={addProductsCart}
        />
      ))}
    </div>
  );
};

export default Products;
