import {Queue, PriorityQueue} from '../../data-stru/queue'

describe('test data structure: Queue', () => {
  describe('test Queue', () => {
    test('test method: enqueue', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      const arr = queue.get()
      expect(arr[0]).toBe(1)
      expect(arr[1]).toBe(3)
      expect(arr[2]).toBe(4)
    })

    test('test method: dequeue', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      const removedItem = queue.dequeue()
      expect(removedItem).toBe(1)
    })

    test('test method: front', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      expect(queue.front()).toBe(1)
    })

    test('test method: clear', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      queue.clear()

      expect(queue.isEmpty()).toBe(true)
    })

    test('test method: isEmpty', async () => {
      const queue = new Queue()

      expect(queue.isEmpty()).toBe(true)
    })

    test('test method: size', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      expect(queue.size()).toBe(3)
    })

    test('test method: get', async () => {
      const queue = new Queue()

      queue.enqueue(1)
      queue.enqueue(3)
      queue.enqueue(4)

      expect(queue.get()).toEqual([1, 3, 4])
    })
  })

  describe('test PriorityQueue', () => {
    test('test method: enqueue', async () => {
      const queue = new PriorityQueue()

      queue.enqueue(1, 1)
      queue.enqueue(2, 2)
      queue.enqueue(5, 5)
      queue.enqueue(3, 3)

      const arr = queue.get()
      expect(arr).toEqual([
        {element: 1, priority: 1},
        {element: 2, priority: 2},
        {element: 3, priority: 3},
        {element: 5, priority: 5},
      ])
    })
  })
})
