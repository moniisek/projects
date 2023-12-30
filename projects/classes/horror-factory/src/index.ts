// Write your class and functions here! ✨
interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export class Horror {
	#name: string;
	isEvil: () => boolean;
	#getPowerFrom: (opponent: Consumed) => number;

	#consumed: Consumed[] = [];

	constructor(horror: {
		name: string;
		isEvil: () => boolean | boolean;
		getPowerFrom: (opponent: Consumed) => number;
	}) {
		this.#name = horror.name;
		this.isEvil = horror.isEvil;
		this.#getPowerFrom = horror.getPowerFrom;
	}

	name() {
		return this.#name;
	}

	getPowerFrom() {
		return this.#getPowerFrom;
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			name: opponent.name(),
			evil: opponent.isEvil(),
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower() {
		return this.#consumed.reduce((sum, current) => {
			return sum + this.#getPowerFrom(current);
		}, this.#consumed.length);
	}
}

export function createDemon() {
	function getPowerFrom(opponent: Consumed) {
		if (opponent.evil) {
			return opponent.power / 2;
		} else {
			return opponent.power * 2;
		}
	}
	return new Horror({ name: "Demon", isEvil: () => true, getPowerFrom });
}

export function createSorcerer(name: string, evil: boolean) {
	function getPowerFrom(opponent: Consumed) {
		if (evil === opponent.evil) {
			return opponent.power * 2;
		} else {
			return opponent.power;
		}
	}
	return new Horror({ name, isEvil: () => evil, getPowerFrom });
}
// You'll need to export the class and functions so the tests can run it.
