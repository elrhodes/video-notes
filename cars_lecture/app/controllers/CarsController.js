import { carsService } from "../services/CarsService.js";


export class CarsController {
    constructor() {
        console.log('🚗');

    }

    async getCars() {
        await carsService.getCars()
    }
}