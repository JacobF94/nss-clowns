import { eventSchedule } from "./EventSchedule.js"
import { EventForm } from "./EventForm.js"


export const ClownParty = () => {
    return `
        <h1>Buttons the Clown Parties</h1>
        <section class="eventForm">
        ${EventForm()}
        </section>
        
        <section class="eventSchedule">
            <h2>Planned Parties</h2>
            ${eventSchedule()}
        </section>`
}