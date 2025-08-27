import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  gachamons = [
    new Gachamon({
      name: 'Oslo',
      picture: 'https://em-content.zobj.net/source/apple/419/orangutan_1f9a7.png',
      type: 'intellectual',
      rarity: 'common'
    }),
    new Gachamon({
      name: 'Justin',
      picture: 'https://em-content.zobj.net/source/apple/419/unicorn_1f984.png',
      type: 'intellectual',
      rarity: 'common'
    }),
    new Gachamon({
      name: 'Xanther',
      picture: 'https://em-content.zobj.net/source/apple/419/dolphin_1f42c.png',
      type: 'biter',
      rarity: 'uncommon'
    }),
    new Gachamon({
      name: 'Kevin',
      picture: 'https://em-content.zobj.net/source/apple/419/zebra_1f993.png',
      type: 'grazer',
      rarity: 'rare'
    }),
    new Gachamon({
      name: 'Lisa',
      picture: 'https://em-content.zobj.net/source/skype/289/mouse_1f401.png',
      type: 'biter',
      rarity: 'rare'
    }),
    new Gachamon({
      name: 'Rexmi',
      picture: 'https://em-content.zobj.net/source/animated-noto-color-emoji/427/chipmunk_1f43f-fe0f.gif',
      type: 'stomper',
      rarity: 'ultra-rare'
    }),
  ]


  //we are going to add an activeGachamon to our collection, so when we click on one, it displays.
  // this is telling the null part that our null is actually a Gachamon
  /**@type {Gachamon} */
  activeGachamon = null

  /**@type (Gachamon[]) */
  myGachamons = []
  //we are saying null, because when we first load the page, we want to have nothing there since we did not click on anything.
  //will change out later





  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())

console.log('AppState', AppState)