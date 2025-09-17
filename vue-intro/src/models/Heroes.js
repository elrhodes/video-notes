

export class Hero {
    constructor(data) {
        this.name = data.name
        this.img = data.img
        this.health = data.health
        this.maxHealth = this.health
        this.level = data.level ?? 1
        this.type = data.type

    }

    get healthPercent() {
        const health = (this.health / this.maxHealth) * 100
        return health
    }
}