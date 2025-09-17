

export class Trivia {
    constructor(data) {
        this.category = data.category,
            this.correct = data.correct_answer,
            this.difficulty = data.difficulty,
            this.inncorrect = data.incorrect_answers,
            this.question = data.question,
            this.type = data.type
    }

    cardTemplate() {
        return `<div>${this.question}<div>`
    }
}