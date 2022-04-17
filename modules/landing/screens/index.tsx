import { ClockHistory, CheckCircle } from "@styled-icons/bootstrap";
import { Payment } from "@styled-icons/fluentui-system-filled";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import Banners from "@shared/components/Banners";
import ProductCard from "@shared/components/productCard";

const actions = [
  {
    text: "Entrega Rápida y Segura",
    icon: <ClockHistory className="text-main  mb-2" />,
  },
  {
    text: "Métodos de Pago",
    icon: <Payment className="text-main  mb-2" />,
  },
  {
    text: "Máxima Calidad",
    icon: <CheckCircle className="text-main  mb-2" />,
  },
  {
    text: "¿Necesitas ayuda?",
    icon: <Whatsapp className="text-main  mb-2" />,
  },
];

const products = [
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

const Landing: React.FC = () => {
  return (
    <div className="w-full md:max-w-7xl mb-9 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-9">
        {actions.map((action, index) => (
          <Banners key={index} text={action.text} icon={action.icon} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            imagen={product.imagen}
            price={product.price}
          />
          // <Banners key={index} text={action.text} icon={action.icon} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
