
//ДЗ 1
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}
delay(3000).then(() => console.log('finish'))

//ДЗ 2
function delayRej(ms) {
  return new Promise(reject => {
    setTimeout(() => reject('critical Error: rejected promise'), ms)
  })
}
delayRej(4000).then((data) => console.error(data))