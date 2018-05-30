/**
 * 归并排序（分治）
 * // ===
 * 核心思想：
 * 归并排序是一种分治算法
 * 1、将原始数组切分成较小的数组，直到每个小数组只有一个位置
 * 2、接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组
 * === //
 * @param arr
 * @return {*}
 */

export function mergeSort (arr) {
  const arrlen = arr.length

  // 数组长度为1，则证明数组已经被分割到最小
  if (arrlen === 1) {
    return arr
  }


  let mid = Math.floor(arrlen / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arrlen)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 合并小数组
 * @param left
 * @param right
 * @return {Array}
 */
function merge (left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // leftIndex++ 的目的之一：跳出while循环的条件
      result.push(left[leftIndex++])
    } else {
      // rightIndex++ 的目的之一：跳出while循环的条件
      result.push(right[rightIndex++])
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex++])
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex++])
  }

  return result
}