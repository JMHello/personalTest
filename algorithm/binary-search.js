import {quickSort} from './quick-sort'

/**
 * 二分查找
 * @param arr
 * @param searchValue
 * @return {number}
 */
export function binarySearch (arr, searchValue) {
  // 排序
  const sortArr = quickSort(arr, 0, arr.length - 1)
  // 上边界
  let lowerIndex = 0
  // 下边界
  let upperIndex = arr.length - 1

  while (lowerIndex <= upperIndex) {
    // 中间值
    let midIndex = Math.floor((lowerIndex + upperIndex) / 2)
    let pivot = sortArr[midIndex]

    if (searchValue < pivot) {
      upperIndex = midIndex - 1
    } else if (searchValue > pivot) {
      lowerIndex = midIndex + 1
    } else {
      // 这里必须直接返回值
      // 不能直接是 searchValueIndex = xxz这种赋值型语句
      return midIndex
    }
  }

  return -1
}