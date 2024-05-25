const form = document.listForm
const listOfItems = document.getElementById("workingList")
const itemInput = document.getElementById("itemInput")
const deleteButton = document.createElement("button")
deleteButton.textContent = "x"


const addItem = form.addEventListener("submit", e=>{
    e.preventDefault()
    const inputValue = itemInput.value
    let itemElement = document.createElement("li")
    itemElement.textContent = inputValue
    listOfItems.append(itemElement, deleteButton)
    form.reset()
})
const removeItem = deleteButton.addEventListener("click", e=>{
    e.preventDefault()
    
})
