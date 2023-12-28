// Write your type and classes here! ✨
export type SmallPetFood =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";

export abstract class SmallFurryPet {
	readonly species;
	protected happiness = 0;

	constructor(species: string) {
		this.species = species;
	}

	abstract eats(food: SmallPetFood): boolean;

	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	dig() {
		this.happiness += 1;
	}

	eats(food: SmallPetFood) {
		switch (food) {
			case "insects":
			case "plants":
			case "seeds":
			case "vegetables":
				return true;
			default:
				return false;
		}
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}

	run() {
		this.happiness += 1;
	}

	eats() {
		return true;
	}
}
// You'll need to export the classes so the tests can run them.
