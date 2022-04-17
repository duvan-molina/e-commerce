import { ClockHistory, CheckCircle } from "@styled-icons/bootstrap";
import { Payment } from "@styled-icons/fluentui-system-filled";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import Banners from "@shared/components/Banners";
import ProductCard from "@shared/components/productCard";
import TestMonialsContainer from "../containers/testmonials";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Landing: React.FC = () => {
  return (
    <>
      <div className="mb-12  bg-lightMain">
        <Carousel
          ssr
          showDots
          arrows={false}
          responsive={responsive}
          infinite
          className=""
          dotListClass="custom-dot-list-style"
        >
          <div className="w-full h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src="https://assets.jumpseller.com/store/alce-riders/themes/277895/options/21139120/Febrero-14-2022-Maverick-long.png?1647553614"
              alt=""
            />
          </div>
          <div className="w-full h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src="https://assets.jumpseller.com/store/alce-riders/themes/277895/options/21139127/Febrero-12-2022-Lagarto.png?1647553615"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="w-full md:max-w-7xl mb-9 mx-auto px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-9">
          {actions.map((action, index) => (
            <Banners key={index} text={action.text} icon={action.icon} />
          ))}
        </div>
        <div className="container mx-auto">
          <h2 className="mb-6 mt-12 font-bold text-2xl">
            Productos destacados
          </h2>
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                imagen={product.imagen}
                price={product.price}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="mb-6 mt-12 font-bold text-2xl">Testimonios</h2>
          <TestMonialsContainer />
        </div>
      </div>
    </>
  );
};

export default Landing;
