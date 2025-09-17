
// const monstersApiURL = 'https://www.dnd5eapi.co/api/2014/monsters'

import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";

const triviaApiURL = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple'
class TriviaService {
    async getTrivia() {
        const response = await fetch(triviaApiURL)
        console.log('⁉️', response);
        const triviData = await response.json()
        console.log('🗺️', triviData);
        const trivia = triviData.results.map(triviData => new Trivia(triviData))
        console.log('🦄', trivia);
        AppState.trivia = trivia



    }
    // async () {
    //     const response = await fetch(monstersApiURL)
    //     console.log(response);
    //     const monsterData = await response.json()
    //     console.log('👹💿', monsterData);
    //     const monsters = monsterData.results.map(monsterData => new Monsters(monsterData))
    //     console.log('👹👹', monsters);
    //     AppState.monsters = monsters


}



export const triviaService = new TriviaService()