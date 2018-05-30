/**
 * 队列（先进先出）
 * 用途：
 */
export class Queue {
  constructor () {
    this.queue = []
  }

  /**
   * 入队
   * @param item
   */
  enqueue (item) {
    this.queue.push(item)
  }

  /**
   * 出队
   * @return {*}
   */
  dequeue () {
    return this.queue.shift()
  }

  /**
   * 获取第一项
   * @return {*}
   */
  front () {
    return this.queue[0]
  }

  /**
   * 清空队列
   */
  clear () {
    this.queue = []
  }

  /**
   * 判断队列是否为空
   * @return {boolean}
   */
  isEmpty () {
    return this.queue.length === 0
  }

  /**
   * 返回队列长度
   * @return {Number}
   */
  size () {
    return this.queue.length
  }

  /**
   * 获取队列
   * @return {Array}
   */
  get () {
    return this.queue
  }
}

/**
 * 优先队列继承队列：元素的添加和移除是基于优先级的
 * 例子：
 * 1、机场登机的顺序 - 头等舱和商务舱乘客的优先级要高于经济舱乘客
 * 2、医院的（急诊科）候诊室 - 医生会优先处理病情比较严重的患者
 */
export class PriorityQueue extends Queue{
  enqueue (element, priority) {
    const qEle = new QueueElement(element, priority)

    if (this.isEmpty()) {
      this.queue.push(qEle)
    } else {
      let isAdded = false

      for (let i = 0; i < this.size(); i++) {
        if (qEle.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, qEle)
          isAdded = true
          break
        }
      }

      if (!isAdded) {
        this.queue.push(qEle)
      }
    }
  }
}

function QueueElement (element, priority) {
  this.element = element
  this.priority = priority
}


