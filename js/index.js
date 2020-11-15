
document.addEventListener('DOMContentLoaded',()=>{  

var todoList = document.getElementById('todo-list');
var inputValue = document.getElementById('input');
var submitBtn = document.getElementById('submit-btn');
var isEditing = false;
var thisBtn;

submitBtn.addEventListener('click',()=>{
     
    if(isEditing && inputValue.value.trim() != ""){
        isEditing =  false
        thisBtn.parentElement.previousElementSibling.textContent = inputValue.value
        inputValue.value = ""   
    }

    else if(inputValue.value.trim() != ""){

    let input_id = Math.floor(Math.random()*1000000).toString()

    let list = document.createElement('li')
    let input_text = document.createElement('p')
    let div = document.createElement('div')
    let edit_button = document.createElement('button')
    let delete_button = document.createElement('button')
    
    edit_button.setAttribute('class','btn edit-btn')
    edit_button.setAttribute('id',input_id)
    edit_button.addEventListener('click',edit)
    edit_button.textContent =  'Edit'

    delete_button.setAttribute('class','btn delete-btn')
    delete_button.setAttribute('id',input_id)
    delete_button.addEventListener('click',handleDelete)
    delete_button.textContent =  'Delete'
    

    div.appendChild(edit_button)
    div.appendChild(delete_button)

    input_text.textContent = inputValue.value
  
    list.setAttribute('class','list')
    list.setAttribute('id',input_id)
    list.appendChild(input_text)
    list.appendChild(div)

    
    todoList.appendChild(list)
    inputValue.value = ""
    }
    
    
})
   
function edit (){
    isEditing = true
    thisBtn = this
    inputValue.value = this.parentElement.previousElementSibling.textContent
    
}
function handleDelete (){
    let children_l = todoList.children
    Object.keys(children_l).map((key,value)=>{
            
            if (children_l[key].id==this.id){
                todoList.removeChild(children_l[key])
            }
    })
}
})