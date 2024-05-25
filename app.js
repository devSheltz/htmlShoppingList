const form = document.listForm
const chai = document.getElementById("workingList")
const pup = document.getElementById("itemInput")

/**the button is in the form so 
 * all you have to do is create a submit event
 */

const addItem = form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const gold = pup.value
    let itemElement = document.createElement("li")
    itemElement.textContent = gold
    chai.appendChild(itemElement)

})