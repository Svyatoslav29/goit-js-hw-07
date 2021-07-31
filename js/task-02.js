// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
]

// const docFrag = document.createDocumentFragment()

// ingredients.forEach(item => {
//     const li = document.createElement('li')
//     li.innerText = item
//     docFrag.appendChild(li)
// })

// document.querySelector('ul#ingredients').appendChild(docFrag)

let totalIngrHTML = ""

ingredients.forEach(item => {
    const li = document.createElement('li')
    li.innerText = item
    totalIngrHTML += li.outerHTML
})

document.querySelector('ul#ingredients').innerHTML = totalIngrHTML
