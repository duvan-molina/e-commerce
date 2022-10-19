import React from "react";

const ButtonAddProduct: React.FC<{
  handleUpdate: (quantity: number) => void;
  quantity: number;
  className?: string;
  isPageProduct?: boolean;
}> = ({ quantity, className, isPageProduct, handleUpdate }) => {
  return (
    <>
      {quantity > 0 ? (
        <div className="flex overflow-hidden w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-main flex-col-reverse sm:flex-row text-light rounded absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 rtl:sm:left-0 text-white">
          <button
            className={[
              "cursor-pointer p-2 transition-colors duration-200 focus:outline-none",
            ].join(" ")}
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
          className={
            className
              ? className
              : "flex items-center justify-center text-sm transition-colors border-main rounded w-7 h-7 md:w-9 md:h-9 text-heading bg-lightMain hover:bg-main hover:border-main hover:text-white focus:outline-none focus:bg-main focus:border-main focus:text-white"
          }
          onClick={() => handleUpdate(quantity + 1)}
        >
          {isPageProduct ? (
            "Agregar al carrito"
          ) : (
            <>
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
            </>
          )}
        </button>
      )}
    </>
  );
};

export default ButtonAddProduct;
