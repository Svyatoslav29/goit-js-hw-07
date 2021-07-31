// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterText
const noUpdate = true

if (noUpdate) {
  const docFrag = document.createDocumentFragment()
  counterText = document.createElement("div")
  counterText.innerText = "0"
  docFrag.appendChild(counterText)
  
  const valueEl = document.querySelector('span#value')
  valueEl.innerHTML = ""
  valueEl.appendChild(docFrag)
} else {
  counterText = document.querySelector('span#value')
}


const atomicCounter = (el, value) => el.innerText = parseInt(el.innerText || 0) + value
const increment = () => atomicCounter(counterText, 1)
const decrement = () => atomicCounter(counterText, -1)


document.querySelector('button[data-action="increment"]').addEventListener('click', increment, true)
document.querySelector('button[data-action="decrement"]').addEventListener('click', decrement, true)
