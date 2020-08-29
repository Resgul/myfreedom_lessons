// let xmlHttp = new XMLHttpRequest();
// xmlHttp.onload = function() {]

// // GET
// xmlHttp.open("GET", 'https://todoappexamplejs.herokuapp.com/items');
// xmlHttp.setRequestHeader('Accept', 'application/json')
// xmlHttp.send();

// // POST
// xmlHttp.open("POST", 'https://todoappexamplejs.herokuapp.com/items');
// xmlHttp.setRequestHeader('Content-Type', 'application/json')
// xmlHttp.setRequestHeader('Accept', 'application/json')
// xmlHttp.send('{"title": "Title", "done": true, "category": "cat"}');

// // PUT
// xmlHttp.open("PUT", 'https://todoappexamplejs.herokuapp.com/items/2');
// xmlHttp.setRequestHeader('Content-Type', 'application/json')
// xmlHttp.setRequestHeader('Accept', 'application/json')
// xmlHttp.send('{"title": "New Title"}');

// // DELETE
// xmlHttp.open("DELETE", 'https://todoappexamplejs.herokuapp.com/items/12');
// xmlHttp.setRequestHeader('Accept', 'application/json')
// xmlHttp.send();

//ДЗ 1, 2, 3 не знаю, правильно ли сделано или нет, в первом ошибка квоты, в третьем видео всегда недоступно

function createIframe(id) {
  let iFrame = document.createElement('iframe');
  iFrame.setAttribute('src',`https://www.youtube.com/embed/${id}?autoplay=1`);
  return document.body.append(iFrame);
}

document.querySelector('button').addEventListener('click', () =>{
  // let xmlHttp = new XMLHttpRequest();
  // xmlHttp.onload = function() {
    let translate = document.querySelector('input').value//JSON.parse(xmlHttp.responseText);
  
    let getVideoHttp = new XMLHttpRequest();  
    getVideoHttp.onload = function() {
      let videoID = JSON.parse(getVideoHttp.responseText).items[1].id.videoId;
      console.log(videoID);
      createIframe(videoID);  
    }
    getVideoHttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCRpcluEHJ1Ya79LSWmkIVpiOidNL7kr4w&q=${translate}&type=video`);
    getVideoHttp.send();
  
    
  // }
  // let textToTranslate = document.querySelector('input').value;
  // xmlHttp.open("GET", `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180711T185018Z.677da5616098f5c1.c2be27c01cb9d0d3ab809b255f2d4b4bc878b0dd&text=${textToTranslate}&lang=ru-en&format=plain`);
  // xmlHttp.send();
})