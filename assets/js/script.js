let currentNumberWrapper = document.querySelector('.currentNumber');
const iniciar = document.querySelector('.adicionar');
const pausar = document.querySelector('.subtrair');
const zerar = document.querySelector('.zerar');
let currentNumber = 0;
let timer;

document.addEventListener('click', function (e) {
  console.log(e.target);
  const el = e.target;

  if (el.classList.contains('zerar')) {
    currentNumberWrapper.innerHTML = "0"
    currentNumber = 0;
  }

  if (el.classList.contains('subtrair')) {
    function decrement() {
      currentNumber = currentNumber - 1
      currentNumberWrapper.innerHTML = currentNumber;

      if ( currentNumber <= - 10) {
        currentNumber = -9; 
      }
      
    };
    decrement();
  }

  if (el.classList.contains('adicionar')) {
    function increment() {
      currentNumber = currentNumber + 1
      currentNumberWrapper.innerHTML = currentNumber;

      if ( currentNumber >= 10) {
        currentNumber = 9; 
      }
    }
    increment();
  } 
});
