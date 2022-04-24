import { useAppDispatch, useAppSelector } from "@shared/store/hooks";
import { cartActions } from "@shared/store/modules/cart/cart.slice";
import {
  productsSelector,
  subTotalSelector,
} from "@shared/store/modules/cart/selectors";
import React from "react";
import NumberFormat from "react-number-format";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const subTotal = useAppSelector(subTotalSelector);

  React.useEffect(() => {
    dispatch(cartActions.udpateSubTotal());
  }, [dispatch, products]);

  return (
    <>
      {products.length > 0 ? (
        <button className="hidden lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 md:right-0 rounded bg-main text-white z-40">
          <span className="flex pb-0.5 items-center">
            <svg
              width="14"
              height="16"
              className="shrink-0"
              viewBox="0 0 12.686 16"
            >
              <g transform="translate(-27.023 -2)">
                <g transform="translate(27.023 5.156)">
                  <g>
                    <path
                      d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                      transform="translate(-53.023 -101.005)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
                <g transform="translate(30.274 2)">
                  <g>
                    <path
                      d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                      transform="translate(-157.039)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="flex md:ml-2 md:mr-2">
              {products.length} Items
            </span>
          </span>
          <span className="bg-white rounded w-full py-2 px-2 text-main mt-3">
            <NumberFormat
              value={subTotal}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              prefix="$"
            />
          </span>
        </button>
      ) : null}
    </>
  );
};

export default Cart;
