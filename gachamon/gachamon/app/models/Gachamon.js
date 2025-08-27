




export class Gachamon {
    constructor(data) {
        this.name = data.name
        this.picture = data.picture
        this.type = data.type
        this.rarity = data.rarity
        this.description = data.description
    }

    get littleCard() {
        return /*html*/`
        <div onclick="app.GachamonsController.setActiveGachamon('${this.name}')" class="little-card ${this.type} role="button"> 
        <div class="card-name fw-bold">${this.name}</div>
        <img src = "${this.picture}"/>
        </div>
        `
    }

    get bigCard() {
        return /* html */`
    <div class="big-card ${this.type}">
        <h3 class="text-end">${this.name}</h3>
        <img class="my-1" src="${this.picture}" alt="">
        <div><span class="${this.type} px-2 rounded-pill text-light">${this.type}</span></div>
        <div class="text-center">${this.rarityStars}</div>
    </div>
`
    }

    get rarityStars() {
        if (this.rarity == 'common') return '⭐️'
        if (this.rarity == 'uncommon') return '⭐️⭐️'
        if (this.rarity == 'rare') return '⭐️⭐️⭐️'
        if (this.rarity == 'ultra-rare') return '⭐️⭐️⭐️⭐️'
    }
}