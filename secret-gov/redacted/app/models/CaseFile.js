import { generateId } from "../utils/GenerateId.js";


export class CaseFile {

    constructor(data) {
        this.id = generateId()
        this.agency = data.agency
        this.caseNumber = this.agency + '-' + this.id.slice(5, 10).toUpperCase()
        this.body = data.body
        this.reportedDate = data.reportedDate
        // TODO comeback to add in additianal properites for REDACTING
    }

    get ListTemplate() {
        return /*html*/ `
        <div onclick = "app.CaseFilesController.setActiveCaseFile('${this.id}')" class = "btn text-start fw-bold" role="button">
        ${this.caseNumber}
        </div>`
    }

    get ActiveCaseFile() {
        return /*html*/`
        <div class="d-flex justify-content-between">
            <h2>${this.caseNumber}</h2>
            <p class="fw-bold fs-4">${this.agency}</p>
        </div>
            <p>${this.reportedDate}</p>
        <div class="p-2">
            <p class="bg-white border rounded p-2">
            ${this.body}
            </p>
        </div>
        `
    }
}