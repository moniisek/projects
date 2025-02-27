// Write your Bird type here! ✨
type Carnivore = "carnivore";
type Omnivore = "omnivore";

type Bird = {
	dangerous?: boolean;
	noisy?: boolean;
	intelligent?: boolean;
	diet: Carnivore | Omnivore;
	name: string;
};

export const birds: Bird[] = [
	{
		dangerous: true,
		diet: "omnivore",
		name: "White-Throated Magpie-Jay",
		noisy: true,
	},
	{
		diet: "omnivore",
		intelligent: true,
		name: "Eurasian Magpie",
	},
	{
		diet: "carnivore",
		name: "Yellow-Billed Blue Magpie",
		noisy: true,
	},
	{
		intelligent: true,
		diet: "omnivore",
		name: "American Crow",
	},
];
