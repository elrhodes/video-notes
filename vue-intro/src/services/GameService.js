import { AppState } from "@/AppState.js"
import { Pop } from "@/utils/Pop.js";

const losesTo = {
    'Fighter': 'Wizard',
    'Ranger': 'Fighter',
    'Wizard': 'Ranger'
}

class GameService {
    attackBoss(heroName) {
        const attackingHero = AppState.heroes.find(hero => hero.name == heroName)
        const monster = AppState.monster
        console.log('hero', (attackingHero.type));
        console.log('monster', (monster.type));



        if (attackingHero.type === monster.type) {
            console.log('TIE');
            Pop.toast('TIE', 'info', 'center')
        } else if (losesTo[attackingHero.type] == monster.type) {
            console.log('LOSE');
            Pop.toast('LOSE', 'warning', 'center')
            attackingHero.health -= 15
        } else {
            console.log('WIN');
            Pop.toast('WIN', 'success', 'center')
            monster.health -= 15

        }
    }


}



export const gameService = new GameService()