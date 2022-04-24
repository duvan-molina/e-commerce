import ProductCard from "@shared/components/productCard";
import { Product } from "interface";

type Props = {
  cols?: number;
  products: Product[];
};

const Products: React.FC<Props> = ({ cols = 4, products }) => {
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
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Products;
