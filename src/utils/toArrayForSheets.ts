import { IData } from '../models/models';
/**
 * функция принимает массив и разбивает его на массивы заданной длинны
 * @param list исходный массив
 * @param num количество элементов в каждом массиве
 * @returns массив из массивов с заданной длинной
 */
export const toArrayForSheets = (list: IData[], num: number): IData[][] => {
  const result: IData[][] = [];
  let arr: IData[] = [];
  for (let i = 1; i <= list.length; i++) {
    if (i % num !== 0) {
      arr.push(list[i - 1]);
    } else if (i % num === 0 || i === list.length) {
      arr.push(list[i - 1]);
      result.push(JSON.parse(JSON.stringify(arr)));
      arr = [];
    }
  }
  return result;
};
