const input = document.getElementById('input')
const button = document.getElementById('button')
const ul = document.getElementById('ul')
let peoples = []


function renderList() {
    ul.innerHTML = null

    peoples.forEach((el) => {
        const newli = document.createElement('li')
        const deleteButton = document.createElement('button')

        newli.textContent = el.name
        newli.classList.add('li')
        deleteButton.textContent = 'delete'

        deleteButton.setAttribute('onclick', `deleteUser(${el.id})`)

        newli.append(deleteButton)
        ul.prepend(newli)

    })
    input.value = ''
}

button.addEventListener('click', () => {
    const inputValue = input.value

    if (inputValue == '') {
        alert('qiymat kiriting')
    } else {
        const person = {
            id: Date.now(),
            name: inputValue
        }

        peoples.push(person)
        console.log(peoples);
        renderList()
    }
})

function deleteUser(id) {
    console.log(id)
    const newUser = peoples.filter(person => person.id !== id)
    peoples = [...newUser]
    renderList()
}