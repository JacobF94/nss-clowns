import { fetchRequests } from "./dataAccess.js"
import { ClownParty } from "./ClownParty.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClownParty()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)