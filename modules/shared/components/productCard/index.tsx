import Link from "next/link";
import NumberFormat from "react-number-format";
import Button from "../button";

type Props = {
  title: string;
  imagen: string;
  price: number;
  slug: string;
};

const ProductCard: React.FC<Props> = ({ title, imagen, price, slug }) => {
  return (
    <Link href={`producto/${slug}`}>
      <div className={`text-center group ease-in duration-300`}>
        <div className="h-52 md:h-64 lg:h-80 rounded-md cursor-pointer overflow-hidden relative 	w-full hover:before:absolute hover:before:inset-0 hover:before:bg-dark hover:before:opacity-10">
          <img
            src={imagen}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="invisible group-hover:visible absolute w-3/4 bottom-4 right-0 left-0 mx-auto ">
            <Button
              text="Agregar al carrito"
              onClick={(e) => {
                e.stopPropagation();
                alert("Hello world");
              }}
            />
          </div>
        </div>
        <h2 className="mt-2">{title}</h2>
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix="$"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
