import { sendRequests } from "./dataAccess.js"

export const EventForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="childName">Child's Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="parentName">Parent's Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="numOfKids">Number of Kids at Party</label>
        <input type="number" name="numOfKids" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="date">Date of Party</label>
        <input type="date" name="date" class="input" />
    </div>
    <div class="field">
        <label class="label" for="length">Length of Party</label>
        <input type="number" name="length" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userChildName = document.querySelector("input[name='childName']").value
        const userParentName = document.querySelector("input[name='parentName']").value
        const userNumOfKids = document.querySelector("input[name='numOfKids']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='date']").value
        const userLength = document.querySelector("input[name='length']").value
        const dataToSendToAPI = {
            childName: userChildName,
            parentName: userParentName,
            numOfKids: userNumOfKids,
            address: userAddress,
            date: userDate,
            partyLengthHours: userLength
        }
        sendRequests(dataToSendToAPI)
    }
})

