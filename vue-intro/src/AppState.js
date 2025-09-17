import { reactive } from 'vue'
import { Hero } from './models/Heroes.js'
import { Monster } from './models/Monster.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {Hero[]}*/
  heroes: [
    new Hero({
      name: 'Slate Slabrock',
      img: 'https://em-content.zobj.net/source/samsung/411/woman-superhero_1f9b8-200d-2640-fe0f.png',
      health: 50,
      type: 'Fighter'

    }),
    new Hero({
      name: 'Swift Ironstag',
      img: 'https://em-content.zobj.net/source/whatsapp/420/woman-superhero_1f9b8-200d-2640-fe0f.png',
      health: 25,
      type: 'Ranger'

    }),
    new Hero({
      name: 'Dumbledore',
      img: 'https://em-content.zobj.net/source/whatsapp/420/woman-superhero_1f9b8-200d-2640-fe0f.png',
      health: 15,
      type: 'Wizard'

    }),
  ],

  monster: new Monster({
    name: 'Ogre',
    picture: 'https://em-content.zobj.net/source/whatsapp/420/troll_1f9cc.png',
    health: 100,
    title: 'bitchin',
    type: 'Fighter'

  }),
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})

