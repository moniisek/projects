import { characters } from "./characters";

// Write your announceCharacter function here! ✨

export interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(text: string): Character {
	let character: Character;
	try {
		character = JSON.parse(text);
		console.log(`I am ${character.name}.`);
		console.log(`My powers are: ${character.powers.join(", ")}.`);
		console.log(`I am ${character.side}.`);
		return character;
	} catch (error) {
		throw new Error((error as Error).message);
	}
}
// You'll need to export it so the tests can run it.
