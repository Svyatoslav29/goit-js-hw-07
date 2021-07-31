// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputField = {
    inputEl: document.querySelector('#validation-input')
}

inputField.inputEl.addEventListener('change', (e) => {
if (Number(inputField.inputEl.dataset.length) !== inputField.inputEl.value.length) {
    inputField.inputEl.classList.add('invalid');
}
else {
    inputField.inputEl.classList.remove('invalid');
    inputField.inputEl.classList.add('valid');
}
});

console.log(inputField.inputEl.textContent.length);


