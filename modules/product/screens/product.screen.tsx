import CarouselWithCustomDots from "@shared/components/CarouselWhitCustomDots";
import Products from "../../shared/containers/products";
import NumberFormat from "react-number-format";
import { productsList } from "data";
import { useAppDispatch, useAppSelector } from "@shared/store/hooks";
import { productsSelector } from "@shared/store/modules/cart/selectors";
import { findProductIndex, getProductQuantity } from "@shared/helpers";
import { cartActions } from "@shared/store/modules/cart/cart.slice";
import ButtonAddProduct from "@shared/components/ButtonAddProduct";

const ProductScreen: React.FC<{
  slug: string;
}> = ({ slug }) => {
  const product = productsList.find((product) => product.slug === slug);
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const index = product?.id ? findProductIndex(products, product.id) : -1;
  const quantity: number = getProductQuantity(products, index);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleUpdate = (value: number) => {
    const { id, title, price } = product;
    if (index === -1 && value === 1) {
      dispatch(cartActions.addProduct({ id, title, price }));
    } else {
      dispatch(cartActions.update({ id, quantity: value }));
    }
  };

  return (
    <div className="mb-6 mt-6">
      <div className="flex flex-col border-b-borderColor border-b-[0.1rem]	 md:flex-row">
        <CarouselWithCustomDots images={productsList.map((e) => e.imagen)} />
        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-flull">
            <h1 className="text-main font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading cursor-pointer transition-colors hover:text-main">
              {product?.title}
            </h1>
            <p className="mt-3 text-sm leading-7 md:mt-4 text-body">
              {product?.description}
            </p>
            <div className="flex items-center my-5 md:my-10">
              <span className="flex items-center">
                <ins className="text-2xl md:text-3xl font-semibold text-main no-underline">
                  <NumberFormat
                    value={product?.price}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="$"
                  />
                </ins>
              </span>
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-6 lg:flex-row">
              <div className="mb-3 lg:mb-0 w-full lg:max-w-[400px]">
                <ButtonAddProduct
                  className="py-4 px-5 w-full flex items-center justify-center text-sm lg:text-base font-light rounded text-white bg-main hover:bg-main-hover transition-colors duration-300 focus:outline-none focus:bg-main-hover"
                  handleUpdate={handleUpdate}
                  quantity={quantity}
                  isPageProduct
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:pb-10 lg:p-14 xl:p-16">
        <h2 className="text-lg text-heading tracking-tight font-semibold mb-6">
          Related Products
        </h2>
        <Products products={productsList} />
      </div>
    </div>
  );
};

export default ProductScreen;
