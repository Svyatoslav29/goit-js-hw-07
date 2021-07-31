// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const refs = {
  input:  document.querySelector('#name-input'),
  output: document.querySelector('#name-output')
};

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('input', onInputChange);

function onInputFocus() {
   console.log('Инпут в фокусе');
}

function onInputBlur() {
  console.log('Инпут вне фокуса');
}

function onInputChange (event) {
   console.log(event.currentTarget.value);
   if (event.currentTarget.value === '') {
       refs.output.textContent = `незнакомец`;
   } else
   refs.output.textContent = event.currentTarget.value;
}
