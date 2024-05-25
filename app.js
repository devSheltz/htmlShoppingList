const form = document.listForm
const listOfItems = document.getElementById("workingList")
const itemInput = document.getElementById("itemInput")

/**the button is in the form so 
 * all you have to do is create a submit event
*/

const addItem = form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let itemElement = document.createElement("li")
    const inputValue = itemInput.value
    itemElement.textContent = inputValue
    listOfItems.appendChild(itemElement)
})
