import {sum} from './script';

test('sum(arr): sums up numbers in array', () => {
  const result = sum([1, 2, 3, '6']);
  expect(result).toBe(12);
})

test('sum(arr): sums up numbers in array', () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
})