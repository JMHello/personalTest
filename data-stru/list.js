/**
 * 链表
 * // ===
 * 思路：
 * 1、链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的
 * 2、每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成
 *
 * 优点：相对于传统的数组，添加或移除元素的时候不需要移动其他元素
 *
 * 缺点：数组可以直接访问任何位置的元素，而链表使用的是指针，所以不行，需要从表头开始迭代列表直到找到所需的元素
 * === //
 */

/**
 * 单链表（只有一个指针，指向下一个节点）
 */
export class SingleLinkedList {
  constructor () {
    this.head = null
    this.len = 0
  }
  append (element) {
    const node = new Node(element)
    let current = null

    // 添加第一个节点
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      // 列表循环，知道找到最后一项
      while (current.next) {
        current = current.next
      }

      // 找到最后一项，将node赋值给其next, 建立链接
      current.next = node
    }

    // 更新列表长度
    this.len++
  }

  /**
   * 任意位置插入节点
   * @param position
   * @param element
   * @return {boolean}
   */
  insert (position, element) {
    // 检查越界值
    if (position >= 0 && position <= this.len) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0

      // 在第一个位置插入节点
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        // 遍历，找到想插入节点的位置前后节点
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }


      // 更新链表长度
      this.len++

      // 添加成功，返回true
      return true
    }
    // 不在越界值范围内，添加失败，返回 false
    else {
      return false
    }
  }

  /**
   * 移除元素
   * @param element
   * @return {*}
   */
  remove (element) {
    const index = this.findEleIndex(element)
    return this.removeAt(index)
  }

  /**
   * 根据位置移除元素
   * @param position
   * @return {*}
   */
  removeAt (position) {
    // 检查越界值
    if (position >= 0 && position < this.len) {
      let current = this.head
      let previous = null
      let index = 0

      // 删除第一项
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next
      }

      // 更新链表长度
      this.len--

      // 返回被删除的元素
      return current.element
    }
    // 不在越界值范围，返回null
    else {
      return null
    }
  }

  /**
   * 找节点在链表中的位置
   * @param element
   * @return {number}
   */
  findEleIndex (element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element == element) {
        return index
      }

      index++
      current = current.next
    }

    // 找不到就返回-1
    return -1
  }

  /**
   * 判断链表是否为空
   * @return {boolean}
   */
  isEmpty () {
    return this.len === 0
  }
  /**
   * 返回链表长度
   * @return {number}
   */
  size () {
    return this.len
  }
  /**
   * 获取链表头
   * @return {null|*}
   */
  getHead () {
    return this.head
  }
}

/**
 * 双链表（两个指针，一个指向上一个元素，一个指向下一个元素）
 * // ===
 * 双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。
 *
 * 优点：
 * 在单向链表中，如果迭代列表时错过了要找的元素，就需要回到列表起点，重新开始迭代，而双链表则不需要
 * === //
 */
export class DoubleLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.len = 0
  }
  insert (position, element) {
    // 检查越界值
    if (position >= 0 && position <= this.len) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0

      // 在第一个位置插入元素
      if (position === 0) {
        // 表头不存在
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      }
      // 添加最后一项
      else if (position === this.len) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      }
      else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }

      // 更新列表长度
      this.len++

      return true
    }
    else {
      return false
    }
  }
  removeAt (position) {
    // 检查越界值
    if (position >= 0 && position < this.len) {
      let current = this.head
      let previous = null
      let index = 0

      // 移除第一项
      if (position === 0) {
        this.head = current.next

        // 如果只有一项，更新tail
        if (this.len === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      }
      // 移除最后一项
      else if (position === this.len - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      }
      else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.prev = previous
      }

      this.len--

      return current.element
    }
    else {
      return null
    }
  }
  /**
   * 判断链表是否为空
   * @return {boolean}
   */
  isEmpty () {
    return this.len === 0
  }
  /**
   * 返回链表长度
   * @return {number}
   */
  size () {
    return this.len
  }
  /**
   * 获取链表头
   * @return {null|*}
   */
  getHead () {
    return this.head
  }
  getTail () {
    return this.tail
  }
}

/**
 * 辅助类：节点类
 * @param element
 * @constructor
 */
function Node (element) {
  this.element = element
  this.next = null
  this.prev = null
}