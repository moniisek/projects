// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

interface Character {
	power: number;
	flying: boolean;
	toughness: number;
	name: string;
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

type Mutations = (keyof typeof mutationsLibrary)[];

function createCharacter(name: string, mutations: Mutations) {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

interface DuelOpponent {
	mutations: Mutations;
	name: string;
}
export function duel(good: DuelOpponent, bad: DuelOpponent) {
	const hero = createCharacter(good.name, good.mutations);
	const villain = createCharacter(bad.name, bad.mutations);

	const heroWinChance = hero.power / villain.toughness;
	const villainWinChance = villain.power / hero.toughness;

	if (heroWinChance > villainWinChance) {
		return ["hero", hero] as const;
	} else {
		return ["villain", villain] as const;
	}
}
