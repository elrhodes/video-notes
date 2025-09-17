import { CaseFile } from './models/CaseFile.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {




  caseFiles = [
    new CaseFile({
      agency: '👽A51',
      reportedDate: '08/31/2022',
      body: 'Farmer John',
    }),
    new CaseFile({
      agency: '🌲SNFS',
      reportedDate: '12/01/1990',
      body: 'wood cutter',
    }),
    new CaseFile({
      agency: '🤠IGA',
      reportedDate: '02/23/2021',
      body: 'Elvis Presley',
    }),
  ]

  /** @type {CaseFile} */
  activeCase = null








  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())