import ProductCard from "@shared/components/productCard";
import Link from "next/link";

type Props = {
  cols?: number;
};

const productsList = [
  {
    title: "Producto 1",
    imagen: "https://picsum.photos/200/300",
    price: 2344,
    slug: "product-1",
  },
  {
    title: "Producto 2",
    imagen: "https://picsum.photos/200/600",
    price: 2324,
    slug: "product-2",
  },
  {
    title: "Producto 3",
    imagen: "https://picsum.photos/200/700",
    price: 2124,
    slug: "product-3",
  },
  {
    title: "Producto 4",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
    slug: "product-4",
  },
  {
    title: "Producto 5",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
    slug: "product-5",
  },
  {
    title: "Producto 6",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
    slug: "product-6",
  },
  {
    title: "Producto 7",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
    slug: "product-7",
  },
  {
    title: "Producto 8",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
    slug: "product-8",
  },
];

const Products: React.FC<Props> = ({ cols = 4 }) => {
  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-${cols} gap-4  mx-auto`}
      >
        {productsList.map((product) => (
          <ProductCard
            key={product.slug}
            title={product.title}
            imagen={product.imagen}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
