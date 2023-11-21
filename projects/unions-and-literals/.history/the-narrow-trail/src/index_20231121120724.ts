export function runCommands() {
	// Declare your variables and runtime logic here! ✨

	let day: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 1;
	let food = 5;
	let water = 5;
	type Resource = "water" | "food" | undefined;
	let availableResource: Resource;

	const rollDice = () => {
		const min = 1;
		const max = 6;
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	while (day < 8) {
		// dice roll for the day + logic
		const randomNumber = rollDice();
		if (randomNumber === 1) {
			availableResource = "food";
		} else if (randomNumber === 2) {
			availableResource = "water";
		} else {
			if (availableResource) {
				availableResource === "water"
					? (water += randomNumber)
					: (food += randomNumber);
				availableResource = undefined;
			} else {
				randomNumber % 2 === 0
					? (availableResource = "food")
					: (availableResource = "water");
			}
		}

		if (food === 0 || water === 0) {
			return false;
		}
		day += 1;
	}
	return true;
}
