// const addButton = document.getElementById('button')
// const input = document.getElementById('input')
// const ul = document.getElementById('ul')
// let peoples = [] 

// function renderList() {
//     ul.innerHTML = null
//     peoples.forEach((el) => {
//         const newli = document.createElement('li')
//         const deleteButton = document.createElement('button')
//         const editedButton = document.createElement('button')

//         newli.textContent = el.name
//         deleteButton.textContent = 'delete'
//         editedButton.textContent = 'edit'

//         newli.classList.add('li')
//         deleteButton.setAttribute('onclick', `deleteUser(${el.id})`)
//         editedButton.setAttribute('onclick', `editUser(${el.id})`)

//         newli.append(deleteButton, editedButton)
//         ul.prepend(newli)
//         console.log(...peoples)
//     })
// }

// addButton.addEventListener('click', () => {
//     const inputValue = input.value

//     if (inputValue == '') {
//         alert('qiymat kiriting')
//     } else {
//         const person = {
//             id: Date.now(),
//             name: inputValue
//         }
//         input.value = ''
//         peoples.push(person)
//         renderList()
//     }
// })



// function deleteUser(id) {
//     const filtered = peoples.filter(person => person.id !== id)
//     peoples = [...filtered]
//     console.log(id)
//     renderList()

// }

// function editUser(id) {
//     const newUser = prompt('taxrirlanmoqda')
//     if (newUser == '') {
//         alert('ilitmos qiymat kiriting')
//     } else {
//         const editUser = peoples.map(person => {
//             if (person.id == id) {
//                 return { ...person, name: newUser }
//             }
//             return person
//         })

//         peoples = [...editUser]
//         renderList()
//     }
// }

// input.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission if the input is inside a form
//         button.click(); // Trigger the button click
//     }
// })



const addButton = document.getElementById('button')
const input = document.getElementById('input')
const ul = document.getElementById('ul')
let peoples = []


function renderList() {
    ul.innerHTML = null

    peoples.forEach((el) => {
        const newli = document.createElement('li')
        const deleteButton = document.createElement('button')
        const editedButton = document.createElement('button')

        newli.textContent = el.name
        deleteButton.textContent = 'delete'
        editedButton.textContent = 'edit'

        newli.classList.add('li')

        deleteButton.setAttribute('onclick', `deletedUser(${el.id})`)
        editedButton.setAttribute('onclick', `editedUser(${el.id})`)

        newli.append(deleteButton, editedButton)
        ul.prepend(newli)
    })
}


addButton.addEventListener('click', () => {

    const inputValue = input.value

    if (inputValue == '') {
        alert('qiymat kiriting')
    } else {
        const person = {
            id: Date.now(),
            name: inputValue,
            isRead: true
        }

        peoples.push(person)
        renderList()
        input.value = ''
    }
})

function deletedUser(id) {
    const filtered = peoples.filter(person => person.id !== id)
    peoples = [...filtered]
    renderList()
}

function editedUser(id) {
    const newUser = prompt('texrirlang')

    if (newUser == '') {
        alert('qiymat kiriting')
    } else {
        const mapped = peoples.map(person => {
            if (person.id == id) {
                return { ...person, name: newUser }
            }
            return person
        })

        peoples = [...mapped]
        renderList()
    }
}



// var fragment = document.createDocumentFragment();
var fragment = document.createDocumentFragment(); /// 

var newElement1 = document.createElement('div');
newElement1.textContent = 'Element 1';

var newElement2 = document.createElement('div');
newElement2.textContent = 'Element 2';

fragment.appendChild(newElement1);
fragment.appendChild(newElement2);

document.body.appendChild(fragment);

