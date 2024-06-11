const input = document.getElementById('input')
const addButton = document.getElementById('button')
const ul = document.getElementById('ul')
let peoples = []

function renderList() {
    ul.innerHTML = null

    peoples.forEach((person)=> {
        const newli = document.createElement('li')
        const deleteButton = document.createElement('button')
        const editUser = document.createElement('button')
        
        
        newli.textContent = person.name
        newli.classList.add('li')
        deleteButton.textContent = 'delete'  
        editUser.textContent = 'edit'

        deleteButton.setAttribute('onclick',`deleteUser(${person.id})`)
        editUser.setAttribute('onclick',`editUser(${person.id})`)

        newli.append(deleteButton,editUser)
        ul.prepend(newli)

        input.value = ''
    })
}


addButton.addEventListener('click',()=> {
    const inputValue = input.value

    if(inputValue == '') {
        alert('qiymatg kiritng')
    }else {
        const person ={
            id:Date.now(),
            name: inputValue}


            peoples.push(person)
            console.log(peoples)
        }
        renderList() 
})

function deleteUser(id) {
    const newUser = peoples.filter(person => person.id  !== id)
    peoples = [...newUser]
    renderList()
}

function editUser(id) {
    const editedName = prompt(`tahrir qilinmoqda`)
    if(editedName == '') {
        alert('qiymat kriiting')
    }else {
        const editedUser = peoples.map(item => {
            if (item.id == id) {
                return { ...item, name: editedName }
            }
            return item
        })
        peoples = [...editedUser]
        renderList()
    }
    
}


// const input = document.getElementById('input')
// const addButton = document.getElementById('button')
// const 


input.addEventListener('keypress', (event) => {
    // console.log(event)
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if the input is inside a form
        button.click(); // Trigger the button click
    }
})
















// function isreadUser(id) {
    
//     if (index !== -1) {
//         const updatedPerson = { ...peoples[index], isRead: !peoples[index].isRead };
//         peoples.splice(index, 1, updatedPerson);
//     }
//     renderList();
// }

// let age = prompt('yoshingizni kiriting');
// let canVote;

// if (age >= 18) {
//     canVote = true;
//     console.log(canVote)
// } else {
//     canVote = false;
//     console.log(canVote)
// }


/////------ Ternary operators-----------//////

// let aGe = prompt('yoshingizni kiriting')
// let can = aGe >= 18 ? true : false
// console.log(can)


