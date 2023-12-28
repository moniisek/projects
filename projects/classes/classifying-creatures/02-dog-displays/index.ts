// Write your class and interface here! ✨
export interface PuppyInTheWindow {
	readonly colors: string[];
	readonly furriness: number;
	readonly owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
	colors;
	furriness;
	owner: string | undefined;

	constructor(colors: string[], furriness: number) {
		this.colors = colors;
		this.furriness = furriness;
	}

	adopt(owner: string) {
		this.owner = owner;
	}
}
// You'll need to export it so the tests can run it.
