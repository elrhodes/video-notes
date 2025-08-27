import { AppState } from "../AppState.js";
import { gachamonsService } from "../services/GachamonService.js";




export class GachamonsController {
    constructor() {
        console.log('Gacha!');
        this.drawGachamons()
        // essentially takes in an event string, the name of one of the gachamons, listineing to acive gachamon, then we can perform an action when something happens
        AppState.on('activeGachamon', () => console.log('active changed'))
        AppState.on('activeGachamon', this.drawActiveGachamon) // what should i do when active gachamon is detected? draw it
        AppState.on('myGachamons', this.drawMyGachamons)
    }
    //Now how do I make this draw happen to the page?
    drawGachamons() {
        const gachamons = AppState.gachamons //this pulls the //reference from the app state
        let gachamonsContent = '' //assuming for blank slot every run
        gachamons.forEach(gachamon => gachamonsContent += gachamon.littleCard)
        const cardListElm = document.getElementById('cards-list')
        cardListElm.innerHTML = gachamonsContent
    }

    drawActiveGachamon() {
        const activeGachamon = AppState.activeGachamon
        let activeContent = activeGachamon.bigCard
        const activeElm = document.getElementById('active-card')
        activeElm.innerHTML = activeContent
    }
    //calling it this because the idea is that we want to click on one and then have it pull up to the middle of the page

    drawMyGachamons() {
        const myGachamons = AppState.myGachamons
        let myContent = ''
        myGachamons.forEach(gachamon => myContent += gachamon.littleCard)
        let myCardsElm = document.getElementById('my-cards')
        myCardsElm.innerHTML = myContent
    }
    setActiveGachamon(gachaName) {
        console.log('inspecting', gachaName)
        gachamonsService.setActiveGachamon(gachaName)
        // this.drawActiveGachamon()
    }

    collectRandomGachamon() {
        console.log('🧠')
        gachamonsService.collectRandomGachamon()
        // this.drawActiveGachamon()
        this.drawMyGachamons()
    }
    //when we draw active gachamon after we set it, this combinder with activeContent = activeGachamon.name, we get the name to show up on our page. || now if we set activeContent = activeGachamon.littleCard , we get the little card we clicked on. || we will set our big card = to this later
}