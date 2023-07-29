/**
 * функция нв основе общего количества строк
 *  и количества строк на странице
 *  возвращает количество страниц.
 * @param totalRowsInSheet количество строк на странице
 * @param listLength общее количество строк
 * @returns количество страниц под эти строки
 */
export const totalSheets = (
  totalRowsInSheet: number,
  listLength: number
): number => {
  if (listLength % totalRowsInSheet === 0) {
    return listLength / totalRowsInSheet;
  } else {
    return Math.floor(listLength / totalRowsInSheet) + 1;
  }
};
