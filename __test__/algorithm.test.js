import {binarySearch} from '../algorithm/binary-search'
import {bubbleSort} from '../algorithm/bubble-sort'
import {quickSort} from '../algorithm/quick-sort'
import {selectionSort} from '../algorithm/selection-sort'
import {insertionSort} from '../algorithm/insertion-sort'
import {mergeSort} from '../algorithm/merge-sort'
import {shellSort} from '../algorithm/shell-sort'


describe('test binary search', () => {
  test('succeeded to handle binary search', async () => {
    const arr = [1, 2, 3, 4, 5]
    const isFound = binarySearch(arr, 3)
    expect(isFound).toBe(2)
  })
})

describe('test bubble sort', () => {
  test('param is not an array', async () => {
    expect(bubbleSort({})).toBe(undefined)
  })
  test('succeeded to handle bubble sort', async () => {
    const arr = [100, 14, 2, 33, 27, 35, 10]
    const bubbleArr = bubbleSort(arr)
    expect(bubbleArr).toEqual([ 2, 10, 14, 27, 33, 35, 100 ])
  })
})

describe('test quick sort', () => {
  test('param is not an array', async () => {
    expect(quickSort([])).toEqual([])
  })
  test('succeeded to handle quick sort', async () => {
    const arr = [2, 1, 5, 4, 3]
    const quickArr = quickSort(arr, 0, arr.length - 1)
    expect(quickArr).toEqual([1, 2, 3, 4, 5])
  })
})

describe('test selection sort', () => {
  test('succeeded to handle selection sort', async () => {
    const arr = [2, 1, 5, 4, 3]
    const seletionArr = selectionSort(arr)
    expect(seletionArr).toEqual([1, 2, 3, 4, 5])
  })
})

describe('test insertion sort', () => {
  test('succeeded to handle insertion sort', async () => {
    const arr = [2, 1, 5, 4, 3]
    const insertionArr = insertionSort(arr)
    expect(insertionArr).toEqual([1, 2, 3, 4, 5])
  })
})

describe('test merge sort', () => {
  test('succeeded to handle merge sort', async () => {
    const arr = [2, 1, 5, 4, 3]
    const mergeArr = mergeSort(arr)
    expect(mergeArr).toEqual([1, 2, 3, 4, 5])
  })
})

describe('test shell sort', () => {
  test('succeeded to handle shell sort', async () => {
    const arr = [2, 1, 5, 4, 3]
    const shellArr = shellSort(arr)
    expect(shellArr).toEqual([1, 2, 3, 4, 5])
  })
})





