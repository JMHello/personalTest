import {is} from '../../../object/objectIs'

/**
 * hasOwnPropery：不会检测原型链上的属性
 * in: 可检测实例上属性以及原型链上的属性，不包括不可枚举的属性
 *
 * // ===
 * object.hasOwnProperty(name)
 * hasOwnProperty.call(obj, name)
 * === //
 */

describe('test hasOwnProperty', () => {
  test('test instance property', async () => {
    const o = new Object()
    o.name = 'jm'
    expect(o.hasOwnProperty('name')).toBe(true)
  })

  test('test prototype property', async () => {
    const o = new Object()
    expect(o.hasOwnProperty('toString')).toBe(false)
  })
})