import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";


export class TriviaController {
    constructor() {
        console.log('👿🎮');
        this.getTrivia()
        // AppState.on('monsters', this.drawMonsters)

    }

    async getTrivia() {
        await triviaService.getTrivia()
    }

    drawQuestion() {
        const trivia = AppState.trivia
        let triviaContent = ''
        trivia.forEach((trivia) => triviaContent += trivia)
    }
}

// drawMonsters() {
// const monsters = AppState.monsters
// let monstersContent = ''
// monsters.forEach((monster) => monstersContent += monster.getCardTemplate)
// let monstersElem = document.getElementById('monsters')
// monstersElem.innerHTML = monstersContent
// }
