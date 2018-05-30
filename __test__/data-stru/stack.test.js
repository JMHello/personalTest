import Stack from '../../data-stru/stack'

describe('test data structure: Stack', () => {

  test('test method: push', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(3)
    stack.push(4)

    const arr = stack.get()

    expect(arr.length).toBe(3)
    expect(arr[0]).toBe(1)
    expect(arr[arr.length - 1]).toBe(4)
  })

  test('test method: pop', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(3)
    stack.push(4)

    const removedItem = stack.pop()

    expect(removedItem).toBe(4)
  })

  test('test method: peek', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(3)
    stack.push(4)

    const topItem = stack.peek()

    expect(topItem).toBe(1)
  })

  test('test method: clear', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(3)
    stack.push(4)

    stack.clear()
    expect(stack.size()).toBe(0)
  })

  test('test method: size', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(3)
    stack.push(4)

    expect(stack.size()).toBe(3)
  })
})


