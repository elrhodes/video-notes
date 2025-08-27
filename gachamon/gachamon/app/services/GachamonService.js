import { AppState } from "../AppState.js";




class GachamonsService {
    setActiveGachamon(gachaName) {
        console.log('service', gachaName);//now we need a way to select the whole gachamon, so we do this//common mistake here is to forget an = you will always find the first one, so name will be right, but everything else will be wrong.
        const selectedGachamon = AppState.gachamons.find(gachamon => gachamon.name == gachaName)
        console.log('👍', selectedGachamon)
        AppState.activeGachamon = selectedGachamon
    }
    //we are saying, we are taking an active Gachamon and finding the name to make it the selected Gachamon || will no longer be null once you press something.
    // console.log('AppState',AppState); || gives us a way to check the proxy for the active Gachamon
    collectRandomGachamon() {
        const gachamons = AppState.gachamons
        const randomIndex = Math.floor(Math.random() * gachamons.length)
        const randomGachamon = gachamons[randomIndex]
        console.log('🎲 💿', randomGachamon);
        AppState.activeGachamon = randomGachamon
        AppState.myGachamons.push(randomGachamon)
        console.log('my', AppState.myGachamons);


    }


}

export const gachamonsService = new GachamonsService()