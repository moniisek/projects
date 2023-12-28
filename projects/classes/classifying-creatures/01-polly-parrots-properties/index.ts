// Write your Parrot class here! ✨
export class Parrot {
    #name: string;
    #phrases: string[] = [];

    constructor(name: string) {
        this.#name = name;
        this.#phrases.push(`${name} wants a cracker!`);
    }

    get name() {
        return this.#name;
    }

    get phrases() {
        return this.#phrases;
    }

    announce() {
        return `Squawk! I'm ${this.name}!`
    }

    learn(phrase: string) {
        this.#phrases.push(phrase);
    }

    speak() {
        const N = this.phrases.length;
        const i = Math.floor(Math.random() * N);
        return this.#phrases[i];
    }
}
// You'll need to export it so the tests can run it.
