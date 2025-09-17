import { AuthController } from './Auth/AuthController.js';
import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only

  AuthController = new AuthController()

  CarsController = new CarsController()
}

window['app'] = new App()


