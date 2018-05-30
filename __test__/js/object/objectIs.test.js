import {is} from '../../../object/objectIs'

describe('test Object.is()', () => {
  test('undefined === undefined: true', async () => {
      expect(Object.is(undefined, undefined)).toBe(true)
  })

  test('null === null: true', async () => {
    expect(Object.is(null, null)).toBe(true)
  })

  test('true === true: true', async () => {
    expect(Object.is(true, true)).toBe(true)
  })

  test('false === false: true', async () => {
    expect(Object.is(false, false)).toBe(true)
  })

  test('both strings of the same length with the same characters in the same order: true', async () => {
    expect(Object.is('111', '111')).toBe(true)
  })

  test('false === false: true', async () => {
    expect(Object.is(false, false)).toBe(true)
  })

  test('both the same object', async () => {
    expect(Object.is({}, {})).toBe(false)
    expect(Object.is([], [])).toBe(false)

    const test = {}

    expect(Object.is(test,test)).toBe(true)
  })


  test('+0 === -0: false', async () => {
    expect(Object.is(+0, -0)).toBe(false)
  })

  test('NaN === NaN: true', async () => {
    expect(Object.is(NaN, NaN)).toBe(true)
    expect(Object.is(NaN, 0/0)).toBe(true)
  })

})

describe('test is()', () => {
  test('undefined === undefined: true', async () => {
    expect(is(undefined, undefined)).toBe(true)
  })

  test('null === null: true', async () => {
    expect(is(null, null)).toBe(true)
  })

  test('true === true: true', async () => {
    expect(is(true, true)).toBe(true)
  })

  test('false === false: true', async () => {
    expect(is(false, false)).toBe(true)
  })

  test('both strings of the same length with the same characters in the same order: true', async () => {
    expect(is('111', '111')).toBe(true)
  })

  test('false === false: true', async () => {
    expect(is(false, false)).toBe(true)
  })

  test('both the same object', async () => {
    expect(is({}, {})).toBe(false)
    expect(is([], [])).toBe(false)

    const test = {}

    expect(is(test,test)).toBe(true)
  })


  test('+0 === -0: false', async () => {
    expect(is(+0, -0)).toBe(false)
  })

  test('NaN === NaN: true', async () => {
    expect(is(NaN, NaN)).toBe(true)
    expect(is(NaN, 0/0)).toBe(true)
  })

})