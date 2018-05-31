if(!Array.prototype.fill) {
  /**
   * Object.defineProperty(obj, prop, descriptor)
   * @param obj 要在其上定义属性的对象。
   * @param prop 要定义或修改的属性的名称。
   * @param descriptor 将被定义或修改的属性描述符。
   * 注意：
   * 1、通过赋值来添加的普通属性会创建在属性枚举期间显示的属性（for...in 或 Object.keys 方法）， 这些值可以被改变，也可以被删除。
   * 2、这种方法允许这些额外的细节从默认值改变。
   * 3、默认情况下，使用Object.defineProperty()添加的属性值是不可变的。
   */

  /**
   * 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。
   * 数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。
   * 存取描述符是由getter-setter函数对描述的属性。
   * 描述符必须是这两种形式之一；不能同时是两者。
   *
   * 数据描述符和存取描述符均具有以下可选键值：
   * 1、configurable：[false - 对象的属性不可以被删除，以及除writable特性外的其他特性不可以被修改。]
   * 2、enumerable: [false - 不可以在 for...in 循环和 Object.keys() 中被枚举]
   * 3、value: [undefined]
   * 4、writable: [false - “不可写”，它不能被重新分配。]
   * 存取描述符同时具有以下可选键值：
   * 1、get: [undefined]
   * 2、set: [undefined]
   *
   * 注意：
   * 1、描述符可同时具有的键值只有configurable和enumerable
   * 2、如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。
   * 3、如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。
   */
  Object.defineProperty(Array.prototype, 'fill', {
    /**
     * value：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
     * @param value
     * @return {*}
     */
    value: function (value) {
      // 如果this为null或者undefined，则抛出错误
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  })
}

export function fill () {
  Object.defineProperty(Array.prototype, 'fill', {
    /**
     * value：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
     * @param value
     * @return {*}
     */
    value: function (value) {
      // 如果this为null或者undefined，则抛出错误
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      // 这里创建的是一个数组对象
      var O = Object(this);
      

      // 无符号右移 >>>
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      // 有符号右移 >>
      var relativeStart = start >> 0;

      // 如果 起始点为负值，取 （负值与数组长度的和）与0 的最大值
      // 如果 起始点为自然数，取 自然数 和 数组长度 的最小值
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // 结束点
      var end = arguments[2];
      // end值选填
      // 如果没有填，则默认是数组的长度
      var relativeEnd = end === undefined ?
        len :
        end >> 0;

      // 如果end值为负数，取 （负值与数组长度的和）与0 的最大值
      // 如果 end值 为自然数，取 自然数 和 数组长度 的最小值
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // 在选定的区间内为每一项填充value值
      while (k < final) {
        O[k] = value;
        k++;
      }

      // 返回数组对象
      return O;
    }
  })
}