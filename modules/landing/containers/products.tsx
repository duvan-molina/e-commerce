import ProductCard from "@shared/components/productCard";

const productsList = [
  {
    title: "Producto 1",
    imagen: "https://picsum.photos/200/300",
    price: 2344,
  },
  {
    title: "Producto 2",
    imagen: "https://picsum.photos/200/600",
    price: 2324,
  },
  {
    title: "Producto 3",
    imagen: "https://picsum.photos/200/700",
    price: 2124,
  },
  {
    title: "Producto 4",
    imagen: "https://picsum.photos/200/800",
    price: 2394,
  },
];

const products: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
      {productsList.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          imagen={product.imagen}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default products;
