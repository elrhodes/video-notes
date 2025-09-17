import { AppState } from "../AppState.js"
import { CaseFile } from "../models/CaseFile.js"




class CaseFilesService {

    setActiveCasefile(caseId) {
        const selectedCaseFile = AppState.caseFiles.find(CaseFile => CaseFile.id == caseId)
        console.log('👆', selectedCaseFile);
        AppState.activeCase = selectedCaseFile;
        console.log(AppState);
    }


}

export const caseFilesService = new CaseFilesService()