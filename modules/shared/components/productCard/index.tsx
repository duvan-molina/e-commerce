import { findProductIndex, getProductQuantity } from "@shared/helpers";
import { useAppDispatch, useAppSelector } from "@shared/store/hooks";
import { cartActions } from "@shared/store/modules/cart/cart.slice";
import { productsSelector } from "@shared/store/modules/cart/selectors";
import Link from "next/link";
import NumberFormat from "react-number-format";

type Props = {
  id: string;
  title: string;
  imagen: string;
  price: number;
  slug: string;
  quantity: number;
};

const ProductCard: React.FC<Props> = ({ id, title, imagen, price, slug }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const index = id ? findProductIndex(products, id) : -1;
  const quantity: number = getProductQuantity(products, index);

  const handleUpdate = (value: number) => {
    if (index === -1 && value === 1) {
      dispatch(cartActions.addProduct({ id, title, price }));
    } else {
      dispatch(cartActions.update({ id, quantity: value }));
    }
  };

  return (
    <div>
      <div className={`text-center group ease-in duration-300`}>
        <Link href={`/producto/${slug}`} passHref>
          <div className="h-52 md:h-64 lg:h-80 rounded-md cursor-pointer overflow-hidden relative 	w-full hover:before:absolute hover:before:inset-0 hover:before:bg-dark hover:before:opacity-10">
            <img
              src={imagen}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col pt-0 p-4 mt-2">
        <div>
          <h2 className="text-textLight">{title}</h2>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="$"
          />
          {quantity > 0 ? (
            <div className="flex overflow-hidden w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-main flex-col-reverse sm:flex-row text-light rounded absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 rtl:sm:left-0 text-white">
              <button
                className="cursor-pointer p-2 transition-colors duration-200 focus:outline-none"
                onClick={() => handleUpdate(quantity - 1)}
              >
                <span className="sr-only">minus</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-3 w-3 stroke-2.5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  ></path>
                </svg>
              </button>
              <div className="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
                {quantity}
              </div>
              <button
                className="cursor-pointer p-2 transition-colors duration-200 focus:outline-none"
                onClick={() => handleUpdate(quantity + 1)}
              >
                <span className="sr-only">plus</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="flex items-center justify-center text-sm transition-colors border-main rounded w-7 h-7 md:w-9 md:h-9 text-heading bg-lightMain hover:bg-main hover:border-main hover:text-white focus:outline-none focus:bg-main focus:border-main focus:text-white"
              onClick={() => handleUpdate(quantity + 1)}
            >
              <span className="sr-only">plus</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
