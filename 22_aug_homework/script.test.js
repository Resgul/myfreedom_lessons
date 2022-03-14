import {sum, sumLi} from './script';

test('sum(arr): sums up numbers in array', () => {
  const result = sum([1, 2, 3, '6']);
  expect(result).toBe(12);
})

test('sum(arr): sums up numbers in array', () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
})

test('sumLi(arr): sums up numbers in TAG <li>', () => {
  document.body.innerHTML = `  
  <ul>
    <li>2</li>
    <li>4</li>
    <li>6</li>
    <li>8</li>
  </ul>`
  
  const result = sumLi();
  expect(result).toBe(20);
})