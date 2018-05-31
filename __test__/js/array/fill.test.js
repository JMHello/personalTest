import {fill} from '../../../array/fill'


test('test method: fill', () => {
  fill()
  const arr = new Array(7).fill(1)
  expect(arr.length).toBe(7)
})