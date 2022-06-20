let addition = document.querySelector(".bi-plus-circle-fill")
addition.addEventListener("click", addItem)
function addItem(event) {
    event.preventDefault()
    var itemText = document.querySelector("input").value
    console.log(itemText)
    if (itemText === " ") {
        alert("Field must contain text")
        console.log("It is empty")
   } else {
    //append ul to our div
    let todoDiv = document.querySelector(".todo-div")
    let ul = document.createElement("ul")
    ul.classList.add("list", "list-unstyled", "col-4", "mx-auto", "gy-2", "d-flex", "align-items-center", "justify-content-between", "bg-white")
    todoDiv.appendChild(ul)


//append li to our ul
let li = document.createElement("li")
li.classList.add("p-4","todo-text","fs-4")
ul.appendChild(li)

 //move the text from input to li field below input field
 //var itemText = document.querySelector("input").value
li.textContent = itemText
//Array for our i class
var iClass = [("bi bi-check-square-fill me-1 fs-2"),("bi bi-x-square-fill fs-2")]
//console.log(iClass[0])

//function to create new i tag 
function appendI (textClass){
    var i = document.createElement("i")
    ul.appendChild(i)
    var classAttr = document.createAttribute("class")
    classAttr.value = textClass
    i.setAttributeNode(classAttr)
 return i
    }
    //append i tag to ul
    ul.appendChild(appendI (iClass[0]))
    ul.appendChild(appendI (iClass[1]))

    console.log("text is not empty")

   }

   //This will make a line through for done items
var check = document.querySelectorAll(".bi-check-square-fill")
check.forEach((element) => {
    console.log(element)
    element.addEventListener("click", event => {
console.log(element)
element.previousElementSibling.classList.add("text-decoration-line-through")
    })
})

//this will delete unwanted items
var trash = document.querySelectorAll(".bi-x-square-fill")
trash.forEach((item) => {
    console.log(item)
    item.addEventListener("click", event => {
console.log(item.parentElement)
item.parentElement.classList.add("d-none")
    })
})
//clear input field
document.querySelector("input").value = " "
} 



