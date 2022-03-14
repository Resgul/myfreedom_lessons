export function sum(array) {
  return array.reduce((prev, curr) => prev += Number(curr), 0);
}