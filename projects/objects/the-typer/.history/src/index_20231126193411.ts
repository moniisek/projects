// Write your types here! ✨
type PlaceBase = {
	name: string;
	proximity: number;
	treasure?: string;
};

type Path = PlaceBase & {
	through: Place;
	shortcut?: Place;
	type: "path";
};

type StreamMiddle = PlaceBase & {
	area: "middle";
	downstream: Place;
	upstream: Place;
};

type StreamEnd = PlaceBase & {
	area: "end";
	upstream: Place;
};

type StreamBegin = PlaceBase & {
	area: "begin";
	downstream: Place;
};

type Stream = { type: "stream" } & (StreamBegin | StreamEnd | StreamMiddle);

type Town = PlaceBase & {
	around?: Place;
	through?: Place;
	type: "town";
};

type Clearing = PlaceBase & { through?: Place; type: "clearing" };

type Place = Clearing | Path | Town | Stream;

let current: Place = {
	name: "Woesong Bridge",
	proximity: 100,
	through: {
		area: "middle",
		downstream: {
			around: {
				area: "end",
				upstream: {
					name: "Vizima",
					proximity: 30,
					type: "clearing",
				},
				name: "White Orchard Creek",
				proximity: 25,
				type: "stream",
			},
			name: "Oxenfurt Gate",
			proximity: 40,
			through: {
				name: "Vergen Tunnel",
				proximity: 20,
				shortcut: {
					proximity: 30,
					name: "Crow's Perch",
					type: "town",
				},
				through: {
					area: "begin",
					downstream: {
						through: {
							treasure: "rare playing cards",
							name: "Reuven's Treasure",
							proximity: 0,
							type: "clearing",
						},
						name: "Gate of the Hierarch",
						proximity: 10,
						type: "town",
					},
					name: "Founders Stream",
					proximity: 25,
					type: "stream",
				},
				type: "path",
			},
			type: "town",
		},
		name: "Yavina River",
		proximity: 50,
		type: "stream",
		upstream: {
			name: "Merchants' Trail",
			proximity: 65,
			through: {
				name: "Beauclair",
				proximity: 70,
				type: "town",
			},
			type: "path",
		},
	},
	type: "path",
};

let treasure;

while (current) {
	console.log(`At: ${current.name}`);

	switch (current.type) {
		case "clearing":
			current = current.through;
			break;

		case "path":
			current =
				current.shortcut &&
				current.shortcut.proximity < current.through.proximity
					? current.shortcut
					: current.through;
			break;

		case "town":
			if (!current.around) {
				current = current.through;
			} else if (!current.through) {
				current = current.around;
			} else {
				current =
					current.around.proximity < current.through.proximity
						? current.around
						: current.through;
			}
			break;

		case "stream":
			switch (current.area) {
				case "begin":
					current = current.downstream;
					break;
				case "end":
					current = current.upstream;
					break;
				case "middle":
					current =
						current.downstream.proximity < current.upstream.proximity
							? current.downstream
							: current.upstream;
					break;
			}
	}

	if (!current) {
		console.log("Hmm. Dead end.");
	} else if (current.treasure) {
		treasure = current.treasure;
		break;
	}
}

if (treasure) {
	console.log(`This will do nicely: ${treasure}.`);
} else {
	console.log("Nothing going.");
}
