import {swap} from '../util/util'

/**
 * 快速排序
 * // ===
 * 1、定义一个pivot, 随机选择或者是中间值
 * 2、小于pivot的值放置在左边，大于pivot的值放置在右边
 * === //
 * @param arr
 * @param left
 * @param right
 */
export function quickSort (arr, left, right) {
  if (arr.length === 1) {
    return arr
  }

  let partitionIndex = partition(arr, left, right)

  // left < partitionIndex - 1 而不是 left < partitionIndex
  // 比如 partitionIndex = 1, left = 0, [1 5 3 2 4 7 6 ]，(left=0, right=1)，在符合left < partitionIndex条件继续执行下去
  // 结果：5 1 3 2 4 7 6，并且 partitionIndex 永远为1，即出现：Maximum call stack size exceeded
  if (left < partitionIndex - 1) {
    quickSort(arr, left, partitionIndex - 1)
  }

  if (right > partitionIndex) {
    quickSort(arr, partitionIndex, right)
  }

  return arr
}

function partition (arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  // 这里必须是 i <= j？
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    // 这里必须是 i <= j，而不能单纯是 i < j
    // 因为，如果单纯是 i < j，就可能会引起 maximum call stack size exceeded，栈溢出！
    // 即：如果遇到 i = j这种情况，那么最外层while永远都是成立的
    if (i <= j) {
      // 会出现 i = j，即i和j的索引值是一样的情况，在这情况下，就不需要做交换了
      if (i !== j) {
        swap(arr, i, j)
      }
      i++
      j--
    }
  }

  return i
}

