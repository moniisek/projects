// Write your classes here! ✨
interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	abstract readonly name: string;
	#consumed: Consumed[] = [];

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	protected abstract getPowerFrom(prevOpponent: Consumed): number;
	protected abstract isEvil(): boolean;

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower(): number {
		// for each previously consumed opponent -
		// sum the result of their getPowerFrom()
		// and return the sum
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.getPowerFrom(consumed),
			this.#consumed.length
		);
	}
}

export class Demon extends Horror {
	readonly name = "Demon";

	protected getPowerFrom(prevOpponent: Consumed): number {
		if (prevOpponent.evil) {
			return prevOpponent.power / 2;
		} else {
			return prevOpponent.power * 2;
		}
	}

	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	protected getPowerFrom(prevOpponent: Consumed): number {
		if (prevOpponent.evil === this.#evil) {
			return prevOpponent.power * 2;
		} else {
			return prevOpponent.power;
		}
	}

	protected isEvil(): boolean {
		return this.#evil;
	}
}
// You'll need to export them so the tests can run them.
