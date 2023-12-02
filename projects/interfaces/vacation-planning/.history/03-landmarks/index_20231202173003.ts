// Write your describeLandmark function here! ✨

interface LandmarkBase {
	name: string;
	type: string;
}
interface Fort extends LandmarkBase {
	name: string;
	type: "fort";
}

interface Lake extends LandmarkBase {
	type: "lake";
	miles: number;
}

interface Lighthouse extends LandmarkBase {
	type: "lighthouse";
	lit: number;
	height: number;
}

interface Mountain extends LandmarkBase {
	type: "mountain";
	height: number;
}

interface Park extends LandmarkBase {
	type: "park";
	acres: number;
}

interface River extends LandmarkBase {
	type: "river";
	length: number;
	depth: number;
}

interface Waterfall extends LandmarkBase {
	type: "waterfall";
	height: number;
}

type Landmark = Fort | Lake | Lighthouse | Mountain | Park | River | Waterfall;

// Landmark union type, its type property indicates what type of landmark it is
export function describeLandmark(landmark: Landmark): string {
	const lines = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];
	switch (landmark.type) {
		case "lake":
			lines.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			lines.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			lines.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			lines.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			lines.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			lines.push(`It is ${landmark.height} feet high.`);
			break;
	}

	return lines.join("\n");
}

// You'll need to export it so the tests can run it.
