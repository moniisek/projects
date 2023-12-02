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
export function describeCity(city: City) {
	const catchphrase = city.catchphrase ? `* "${city.catchphrase}"` : "";
	const north = city.coordinates.north;
	const west = city.coordinates.west;
	const nameLine = `${city.name}, New York`;
	const coordinatesLine = `* Located at ${north[0]}°${north[1]}'${north[2]}"N ${west[0]}°${west[1]}'${west[2]}"W`;
	return nameLine + catchphrase + coordinatesLine;
}
// You'll need to export it so the tests can run it.
