import {Fib, lcs, Knapsack} from '../../data-stru/dynamicPlanning'
const {recurFib, dynFib, iterFib} = Fib
const {dyKnapsack, optDyKnapsack} = Knapsack

describe('dynamic planning', () => {
  describe('Fibonacci sequence', () => {
    test('recurFib', async () => {
      const result = recurFib(20)
      expect(result).toBe(6765)
    })

    test('dynFib', async () => {
      const result = dynFib(20)
      expect(result).toBe(6765)
    })

    test('iterFib', async () => {
      const result = iterFib(20)
      expect(result).toBe(6765)
    })
  })
})

describe('find public string', () => {
  test('lcs', async () => {
    const str = lcs('abbcc', 'dbbcc')

    expect(str).toBe('bbcc')
  })
})

describe('deal with knapsack problems', () => {
  // test('dynamic planning', async () => {
  //   const value = [4, 5, 10, 11, 13]
  //   const size = [3, 4, 7, 8, 9]
  //   const capacity = 16
  //   const n = 5
  //   const maxValue = dyKnapsack(capacity, size, value, n)
  //
  //   expect(maxValue).toBe(23)
  // })

  test('dynamic planning', async () => {
    const value = [4, 5, 10, 11, 13]
    const size = [3, 4, 7, 8, 9]
    const capacity = 16
    const maxValue = optDyKnapsack(capacity, size, value)

    expect(maxValue).toBe(23)
  })
})