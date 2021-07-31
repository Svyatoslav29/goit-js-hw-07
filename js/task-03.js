
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
]

let totalImagesHTML = ""

images.forEach(image => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.setAttribute("height", "192")
    img.setAttribute("src", image.url)
    img.setAttribute("alt", image.alt)
    li.innerHTML = img.outerHTML
    totalImagesHTML += li.outerHTML
})

document.querySelector('ul#gallery').insertAdjacentHTML('beforeend', totalImagesHTML)

console.log(makeGalleryMarkup(images[1]));

const imageMarkup = images
.map(makeGalleryMarkup)
.join('');
console.log(imageMarkup);

 gallery.insertAdjacentHTML('afterbegin', imageMarkup);


 const list = document.querySelector("#gallery");
 list.classList.add("pictures");
const addGalleryListEl = images.map(function (image) {
  const src = image.url;
  const alt = image.alt;
  const addGalleryListElImg = `<li><img src = ${src},alt = ${alt}, width = 500px></li>`;
  return addGalleryListElImg
});
list.insertAdjacentHTML('beforeend', addGalleryListEl.join(' ')); 
