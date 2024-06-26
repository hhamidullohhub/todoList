


// const input = document.getElementById('input')
// const addButton = document.getElementById('button')
// const ul = document.getElementById('ul')
// let peoples = []

// function renderList() {
//     ul.innerHTML = null

//     peoples.forEach((obj)=> {
//         const newli = document.createElement('li')
//         const deleteButton = document.createElement('button')
//         const editButton = document.createElement('button')

//         deleteButton.setAttribute('onclick',`deleteUser(${obj.id})`)
//         editButton.setAttribute('onclick',`editedUsers(${obj.id})`)

//         newli.textContent = obj.name
//         newli.classList.add('li')
//         deleteButton.textContent ='delete'
//         editButton.textContent ='edit'

//         newli.append(deleteButton,editButton)
//         ul.prepend(newli)
//     })
// }

// addButton.addEventListener('click',()=> {
//     const inputValue = input.value

//     if(inputValue == '') {
//         alert('qiymat kiriting')
//     }else {
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
//     const removed = peoples.filter(person=>person.id !==id)
//     peoples = [...removed]
//     renderList()
// }


// function deleteUser (id) {
//     const removed = peoples.filter(person=> {
//        return person.id !== id
//     })
//     peoples =[...removed]
//     console.log(id);
//     renderList()
    
// }



// function editedUsers(id) {
//     const newUser = prompt('taxrirlanmoqda')

//     if(newUser == '' ) {
//         alert('ilitmos qiymat kiriting')
//     }else {
//         const udited = peoples.map(person=> {
//             if(person.id==id) {
//                 return {...person,name: newUser}
//             }
//             return person
//         })

//         peoples = [...udited]
//         renderList()
//     }
// }





// input.addEventListener('keypress', (event) => {
//     // console.log(event)
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission if the input is inside a form
//         button.click(); // Trigger the button click
//     }
// })





//-----------Map--------------//
// let numbers = [2,4,6,8]
// const dooubleNumber = numbers.map(number=>number*2)
// console.log(dooubleNumber)
















// function add(a,b,callback) {
//     console.log(`${a} va ${b} nign yigindisi ${a+b} ga teng`)
//     callback()
// }

// function display() {
//     console.log('bu callback functiondan keyin console ga chiqadi')
// }

// add(1,2,display)














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


// let a =  {...person, name: newUser}





//                           ...person ===================>  name: person.name,id:person.id             