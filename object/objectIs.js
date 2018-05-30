/**
 * Object.is()是‘===’非 '==
 * 主要解决 +0 和 -0的比较，NaN和NaN的比较'
 * // ==
    console.log(NaN == NaN) false
    console.log(NaN === NaN) false
    console.log(+0 == -0) true
    console.log(+0 === -0) true

    Object.is(NaN, NaN) ==> true
    Object.is(+0, -0) ==> false
 * === //
 */

/**
 * is
 */

export function is (x, y) {
  // 主要解决 +0 和 -0
  if (x === y) {
    return x !== 0 || 1 / x === 1 /y
  }
  // 主要解决 NaN 和 NaN
  else {
    return x !== x && y !== y
  }
}