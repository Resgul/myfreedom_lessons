class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 50;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    let imgCont = document.createElement('img'); // метод должен создать тег img
    imgCont.setAttribute('src', this.imgUrl); // вложить в него src картинки (this.imgUrl)
    this.html = imgCont; // и записать в this.html

    this.render() // + дергаем render
    document.body.classList.add('black-body')// + странице должен залится фон черным
  }
  
  render() {
    document.body.append(this.html) // метод должен отрисовать изображение (this.html) на странице
    let imgCont = document.querySelector('img'); // применить фиксированное позиционирование
    imgCont.classList.add('position');
    imgCont.style.top = this.top; // использовать this.top и this.left для указания позиции
    imgCont.style.left = this.left;
    imgCont.style.width = this.width; // использовать this.width для указания ширины
    // задаю границы
    if (this.left < 20) {
      this.left = 0;
    } else if (this.left > 500) {
        this.left = 500;
      }
    if (this.top < 20) {
      this.top = 0;
    } else if (this.top > 500) {
        this.top = 500;
      }     
    }

  moveUp() {
    this.top -= 20;
    this.html.style.top = this.top; // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    this.render() // + дергаем render
  }
  moveDown() {
    this.top += 20;
    this.html.style.top = this.top; // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    this.render() // + дергаем render
  }
  moveLeft() {
    this.left -= 20;
    this.html.style.left = this.left; // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    this.render() // + дергаем render
  }
  moveRight() {
    this.left += 20;
    this.html.style.left = this.left;// метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    this.render() // + дергаем render
  }

  // движение стрелками
  arrowMove() {
    document.body.addEventListener('keydown', event => {
      event.preventDefault();
      switch(event.key) {
        case ('ArrowDown'): this.moveDown()
        break;
        case ('ArrowUp'): this.moveUp()
        break;
        case ('ArrowRight'): this.moveRight()
        break;
        case ('ArrowLeft'): this.moveLeft()
        break;
      }
    })
  }
}

const imgUrl = 'http://pngimg.com/uploads/cursor/cursor_PNG102.png';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();
mfLogotip.arrowMove();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();