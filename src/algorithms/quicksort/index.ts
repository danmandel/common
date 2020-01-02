import {partition} from '../partition';
/**
 * Quicksort is a comparison sort. Efficient implementations are not stable.
 *
 *  - Time Complexity -
 * Best case:  n*log(n)
 * Worst case: n^2
 *
 *  - Space Complexity -
 * In place: log(n)
 *
 * @param {Array[number]} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {Array<number>}
 */

export const quicksort:Function = (arr:number[], left:number = 0, right:number = arr.length - 1):any => {
  if (arr.length <= 2) return arr;
  const index:number = partition(arr, left, right);
  if (left < index - 1) quicksort(arr, left, index - 1);
  if (index < right) quicksort(arr, index, right);
};
