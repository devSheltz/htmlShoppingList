const form = document.listForm
const listOfItems = document.getElementById("workingList")
const itemInput = document.getElementById("itemInput")
const deleteButton = document.createElement("button")
deleteButton.textContent = "x"


const addItem = form.addEventListener("submit", e=>{
    e.preventDefault()
    let itemElement = document.createElement("li")
    const inputValue = itemInput.value
    itemElement.textContent = inputValue
    listOfItems.append(itemElement, deleteButton)
})
const removeItem = form.addEventListener("click", e=>{
    e.preventDefault()
})
