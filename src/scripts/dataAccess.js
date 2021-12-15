const applicationState = {
    parties: []
}
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/party`)
    .then(response => response.json())
    .then(
        (partyState) => {
            applicationState.parties = partyState
        }
    )
}

export const sendRequests = (userEventInfo) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEventInfo)
    }

    return fetch(`${API}/party`, fetchOptions)
        .then(response =>response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getRequests = () => {
    return applicationState.parties.map(request => ({...request}))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/party/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}