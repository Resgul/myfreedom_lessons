// ДЗ 0
document.querySelector('button').addEventListener('click', async (id) => {
  try {
    let id = document.querySelector('.input1').value;
    let response = await fetch(`https://todoappexamplejs.herokuapp.com/items/` + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: 'RESHAD12'})  
    })
    if (response.ok) {
      let data = await response.json();
      console.log('респонс ОК ', data.title );
    } else {
      throw new Error ('респонс не ОК')
    } 
  } catch(e) {
      console.log('Произошла Ошибка: ' + e);
  } finally {
      console.log('конец');
  }
})

// ДЗ 1

let names = ['iliakan', 'remy', 'jeresig'];

let promises = names.map(async name => {
  let response = await fetch(' https://api.github.com/users/' + name);
  let data = await response.json();
  return data.name
})


// Promise.all(promises).then(names => {
//   names.forEach(name => {
//     console.log(name);
//     console.log(name);
//   })
// })


async function func() {
  let names = await Promise.all(promises);
  names.forEach(name => {
    console.log(name);
    console.log(name);
  })
}
func()