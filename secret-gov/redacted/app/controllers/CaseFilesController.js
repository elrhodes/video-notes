import { AppState } from "../AppState.js";
import { caseFilesService } from "../services/CaseFilesService.js";





export class CaseFilesController {
    constructor() {

        console.log('👾🧀');
        this.drawCaseFilesList()
        AppState.on('activeCase', this.drawActiveCase)


    }

    drawCaseFilesList() {
        const caseFiles = AppState.caseFiles
        let listContent = ''
        caseFiles.forEach(caseFile => listContent += caseFile.ListTemplate)
        const listElm = document.getElementById('case-files-list')
        const countElm = document.getElementById('case-count')
        listElm.innerHTML = listContent
        countElm.innerText = caseFiles.length.toString()
    }

    drawActiveCase() {
        const activeCase = AppState.activeCase
        const activeContent = activeCase.ActiveCaseFile
        const activeElm = document.getElementById('active-case')
        activeElm.innerHTML = activeContent
    }

    setActiveCaseFile(caseId) {
        console.log('setting active, like gachamon to show what we clicking', caseId);
        caseFilesService.setActiveCasefile(caseId)
    }
}