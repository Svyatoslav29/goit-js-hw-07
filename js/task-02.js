// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
]

const totalIngr = ingredients.map(item => {
    const list = document.createElement('li')
    list.innerHTML = `<p>${item}</p>`;
    console.log(list);
    return list;
})

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...totalIngr);








// const docFrag = document.createDocumentFragment()

// ingredients.forEach(item => {
//     const li = document.createElement('li')
//     li.innerText = item
//     docFrag.appendChild(li)
// })

// document.querySelector('ul#ingredients').appendChild(docFrag)
