export function sum(array) {
  return array.reduce((prev, curr) => prev += Number(curr), 0);
}

export function sumLi() {
  return [...document.querySelectorAll('li')].map(li => li.innerHTML).reduce((prev, curr) => prev += Number(curr), 0);
}
console.log(sumLi());