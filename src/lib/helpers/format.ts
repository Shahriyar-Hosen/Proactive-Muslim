interface DateFormat {
  formatted: { day?: number; month?: number; year?: number };
  date?: Date;
  revers?: boolean;
}

export const dateFormat = ({ formatted, date, revers }: DateFormat): string => {
  const today = new Date();

  const day = date && date.getDate();
  const month = date && date.getMonth() + 1;
  const year = date && date.getFullYear();

  let dd = String(formatted.day || day || today?.getDate());
  let mm = String(formatted.month || month || today?.getMonth() + 1);
  const yyyy = formatted.year || year || today?.getFullYear();

  if (Number(dd) < 10) dd = 0 + dd;
  if (Number(mm) < 10) mm = 0 + mm;

  if (revers) {
    return yyyy + "-" + mm + "-" + dd;
    // output === '2022-10-01'
  } else {
    return dd + "-" + mm + "-" + yyyy;
    // output === '01-10-2022'
  }
};

/**
 * @name addLeadingZero
 * @param num
 * @returns string
 * @description This function checks if the number is less than 10. If it is, it concatenates a "0" before the number. Otherwise, it simply returns the number converted to a string.
 * @example export const addLeadingZero = (num: number) => {
 *    const result = num >= 10 ? num : "0" + num;
 *    return String(result);
 * };
 */
export const addLeadingZero = (num: number) =>
  String(num >= 10 ? num : "0" + num);
