import {SingleLinkedList, DoubleLinkedList} from '../../data-stru/list'

describe('test single linked list', () => {
  test('test method: append', async () => {
    const list = new SingleLinkedList()
    // 头节点
    list.append(1)
    expect(list.getHead().element).toBe(1)

    list.append(2)
    list.append(3)
    list.append(4)
    expect(list.size()).toBe(4)
  })

  test('test method: insert', async () => {
    const list = new SingleLinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    list.append(4)

    // 在第一个位置插入节点
    list.insert(0, 5)
    expect(list.findEleIndex(5)).toBe(0)

    list.insert(3, 6)
    expect(list.findEleIndex(3)).toBe(4)
  })

  test('test method: remove', async () => {
    const list = new SingleLinkedList()
    list.append(1)
    list.append(2)
    list.append(3)
    list.append(4)

    list.remove(2)
    expect(list.findEleIndex(2)).toBe(-1)
    expect(list.findEleIndex(1)).toBe(0)
  })
})

describe('test double linked list', () => {
  describe('test method: insert', () => {
    test('test method:insert the first postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)
      doubleList.insert(3, 4)

      expect(doubleList.size()).toBe(4)

      // 添加第一项
      doubleList.insert(0, 0)
      expect(doubleList.getHead().element).toBe(0)

    })
    test('test method:insert the end postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)
      doubleList.insert(3, 4)

      expect(doubleList.size()).toBe(4)


      // 添加最后一项
      doubleList.insert(4, 5)

      expect(doubleList.getTail().element).toBe(5)

    })
    test('test method:insert the other postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)
      doubleList.insert(3, 4)

      expect(doubleList.size()).toBe(4)

      doubleList.insert(1, 0)
      expect(doubleList.getHead().next.element).toBe(0)
    })
  })

  describe('test method: removeAt', () => {
    test('test method:insert the first postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)

      doubleList.removeAt(0)
      expect(doubleList.getHead().element).toBe(2)

    })
    test('test method:insert the end postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)

      doubleList.removeAt(2)
      expect(doubleList.getTail().element).toBe(2)

    })
    test('test method:insert the other postion', async () => {
      const doubleList = new DoubleLinkedList()
      doubleList.insert(0, 1)
      doubleList.insert(1, 2)
      doubleList.insert(2, 3)
      doubleList.insert(3, 4)

      doubleList.removeAt(1)
      expect(doubleList.getHead().next.element).toBe(3)
    })
  })
})
