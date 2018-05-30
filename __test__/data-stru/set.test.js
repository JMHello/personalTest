import {Set} from '../../data-stru/set'

describe('test data structure: Stack', () => {

  test('test method: add', () => {
    const set = new Set()
    
    set.add(1)
    set.add(2)
    set.add(3)
    set.add(4)
    
    expect(set.has(1)).toBe(true)
  })

  test('test method: has', () => {
    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)
    set.add(4)

    expect(set.has(1)).toBe(true)
  })

  test('test method: remove', () => {
    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)
    set.add(4)
    expect(set.has(1)).toBe(true)

    set.remove(1)
    expect(set.has(1)).toBe(false)
  })

  test('test method: clear', () => {
    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)
    set.add(4)

    set.clear()
    expect(set.size()).toBe(0)
  })

  test('test method: values', () => {
    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)
    set.add(4)

    expect(set.values()).toEqual(["1", "2", "3", "4"])
  })
})


