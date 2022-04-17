import { DEFAULT_LOCALE } from "./constants";
import memoize from "@formatjs/fast-memoize";

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
