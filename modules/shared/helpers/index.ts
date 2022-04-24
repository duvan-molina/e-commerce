import Currency from "currency.js";
import { DEFAULT_LOCALE } from "./constants";
import memoize from "@formatjs/fast-memoize";
import { CartProduct, Product } from "interface";

/**
 * @description Intl formarters to speed up
 */
export const formatters = {
  getNumberFormat: memoize(
    (locale = DEFAULT_LOCALE, opts: Intl.NumberFormatOptions) =>
      new Intl.NumberFormat(locale, opts)
  ),
  getDateTimeFormat: memoize(
    (locale = DEFAULT_LOCALE, opts: Intl.DateTimeFormatOptions) =>
      new Intl.DateTimeFormat(locale, { timeZone: "UTC", ...opts })
  ),
  getPluralRules: memoize(
    (locale = DEFAULT_LOCALE, opts: Intl.PluralRulesOptions) =>
      new Intl.PluralRules(locale, opts)
  ),
};

/**
 * format string as number ex: 2000 = 2,000
 * @param value string the value for format
 * @param fractions 0 to 20
 * @param style string decimal | currency | percent
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 */
export const formatNumber = (
  value: string,
  fractions = 0,
  style = "currency"
): string => {
  if (value === "" || value === undefined) {
    return value;
  }
  if (!(style in { decimal: true, currency: true, percent: true })) {
    return value.toString();
  }
  const safeValue = value.replace
    ? Number(value.replace(/[^0-9-.]+/, ""))
    : value;
  return formatters
    .getNumberFormat(DEFAULT_LOCALE, {
      style,
      currency: "USD",
      minimumFractionDigits: fractions,
    })
    .format(safeValue as number);
};

export const formatMoney = (
  value: number,
  config?: Intl.NumberFormatOptions
) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
    ...config,
  };
  // ! if its a whole, dollar amount, leave off the .00
  if (value % 100 === 0) options.minimumFractionDigits = 2;
  //const formatter = new Intl.NumberFormat('en-US', options);
  const formatter = formatters.getNumberFormat(DEFAULT_LOCALE, options);
  return formatter.format(value);
};

export const getProductQuantity = (
  cartProducts: CartProduct[],
  index: number
): number => {
  let quantity = 0;
  if (index !== -1) {
    quantity = cartProducts[index].quantity;
  }
  return quantity;
};

export const findProductIndex = (
  cartProducts: CartProduct[],
  dataId: string
): number => {
  let index = -1;
  if (cartProducts && cartProducts.length) {
    index = cartProducts.findIndex((product) => product.id === dataId);
  }
  return index;
};

export const calculateTotalPrice = (products: Product[]): number => {
  let total = Currency(0);
  let finalTotal;
  products.forEach((product) => {
    const quantity = product.quantity ? product.quantity : 1;
    const price = product.price;
    const itemPrice = Currency(quantity).multiply(price);
    total = Currency(total).add(itemPrice);
  });
  finalTotal = Number(total.value);
  return finalTotal;
};
