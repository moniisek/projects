// Write your collectTreasure function here! ✨
type Buried<T> = Buried<T>[] | NextArea<T> | Treasure<T>;

type NextArea<T> = Catacomb<T> | TunnelSystem<T>;

interface Catacomb<T> {
	type: "catacomb";
	inside: Buried<T>;
}

interface TunnelSystem<T> {
	type: "tunnels";
	entrances: Buried<T>[];
}

interface Treasure<T> {
	type: "treasure";
	content: T;
}

export function collectTreasure<
	Content,
	Fake extends Content,
	Real extends Content
>(
	buried: Buried<Content>,
	isFake: (datum: Content) => datum is Fake,
	isReal: (datum: Content) => datum is Real
) {
	const fake: Fake[] = [];
	const real: Real[] = [];
	const scrap: Content[] = [];

	function recurse(data: Buried<Content>) {
		const collected = collectTreasure(data, isFake, isReal);
		fake.push(...collected.fake);
		real.push(...collected.real);
		scrap.push(...collected.scrap);
	}

	if (Array.isArray(buried)) {
		for (const item of buried) {
			recurse(item);
		}
	} else {
		switch (buried.type) {
			case "catacomb":
				recurse(buried.inside);
				break;
			case "treasure":
				if (isFake(buried.content)) {
					fake.push(buried.content);
				} else if (isReal(buried.content)) {
					real.push(buried.content);
				} else {
					scrap.push(buried.content);
				}
				break;
			case "tunnels":
				for (const entrance of buried.entrances) {
					recurse(entrance);
				}
				break;
		}
	}

	return { fake, real, scrap };
}
// You'll need to export it so the tests can run it.
