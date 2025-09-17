import { Hero } from "./Heroes.js";


export class Monster extends Hero {
    constructor(data) {
        super(data)
        this.title = data.title
        this.goldDropped = data.goldDropped || 25


    }
}