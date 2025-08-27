import { ExampleController } from './controllers/ExampleController.js';
import { GachamonsController } from './controllers/GachamonController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only

  GachamonsController = new GachamonsController()

}

window['app'] = new App()


