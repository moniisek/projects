// Write your describeCity function here! ✨
type Coordinate = [number, number, number];
interface City {
	coordinates: {
		north: Coordinate;
		west: Coordinate;
	};
	name: string;
	catchphrase?: string;
}

function describeUnit(unit: number) {
	return unit.toString().padStart(2, "0");
}

function describeCoordinate(coordinate: Coordinate) {
	return [
		`${describeUnit(coordinate[0])}°`,
		`${describeUnit(coordinate[1])}'`,
		`${describeUnit(coordinate[2])}'"`,
	].join("");
}

export function describeCity(city: City) {
	const lines = [`${city.name}, New York`];
	if (city.catchphrase) {
		lines.push(`* "${city.catchphrase}"`);
	}
	const coordinates = `* ${describeCoordinate(
		city.coordinates.north
	)}N ${describeCoordinate(city.coordinates.west)}W`;
	lines.push(coordinates);

	return lines.join("\n");
}
// You'll need to export it so the tests can run it.
