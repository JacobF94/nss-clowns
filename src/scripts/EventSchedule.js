import { getRequests, deleteRequest } from "./dataAccess.js"

export const eventSchedule = () => {
    const requestArray = getRequests()
    const requestHtml = (request) => {
        return `<li>Event schduled for ${request.childName} on ${request.date}, ${request.parentName} is the attending parent, the event will last for ${request.partyLengthHours} hours at ${request.address}, and there will be a total of ${request.numOfKids} children present.<button class="request_delete" id="request--${request.id}">Delete</button></li>`
    }
    let html = `
        <ul>
            ${requestArray.map((request) => requestHtml(request))}
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})