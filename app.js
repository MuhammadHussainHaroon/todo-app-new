const email = document.querySelector('#email')
const password = document.querySelector('#password')
const div = document.querySelector('div')
const array = []




function rendertodo() {
    div.innerHTML = ''
    for(i = 0; i < array.length; i++){
        div.innerHTML +=`<p>${array[i].email}</p>
        <p>${array[i].password}</p>
        <button onclick="deletess(${[i]})">delete</button>
        <button onclick="edits(${[i]})">edit</button>`
    email.value = ''
    password.value = ''
}
return
}
function submits(e) {
    e.preventDefault()
    
    const obj = {
        email:email.value,
        password:password.value,
    }
    array.push(obj)
    div.innerHTML = ''
    for(i = 0; i < array.length; i++){
        div.innerHTML +=`<p>${array[i].email}</p>
        <p>${array[i].password}</p>
        <button onclick="deletess(${[i]})">delete</button>
        <button onclick="edits(${[i]})">edit</button>`
        
        email.value = ""
        password.value = ""
    }
}
function deletess(index) {
    let newarr = array.splice(index , 1)
    console.log(index);
    rendertodo()

}
function edits(index) {
    let uservalue = prompt("enter your email:" , array[index].email)
    let newpassword = prompt("enter your password:" , array[index].password)

    if(uservalue !== "null" , newpassword !=="null"){
        array[index].email = uservalue
        array[index].password = newpassword
        rendertodo()
    }
    
}











    // function edits(index) {
    //         const newEmail = prompt('Enter new email:', array[index].email);
    //         if (newEmail !== null) {
    //             array[index].email = newEmail;
    //             rendertodo();
    //         }
    //     }






































