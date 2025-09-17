import { CaseFilesController } from './controllers/CaseFilesController.js';
import { ExampleController } from './controllers/ExampleController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
  CaseFilesController = new CaseFilesController()
}

window['app'] = new App()


