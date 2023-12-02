// Write your groupRestaurants function here! ✨
interface Restaurant {
	city: string;
	name: string;
}
export function groupRestaurants(
	restaurants: { city: string; name: string }[]
) {
	const groupedByCity = new Map();
	for (const restaurant of restaurants) {
		if (groupedByCity.has(restaurant.city)) {
			const restaurantsInCity = groupedByCity.get(restaurant.city);
			restaurantsInCity.push(restaurant.name);
		} else {
			groupedByCity.set(restaurant.city, [restaurant.name]);
		}
	}
	return Object.fromEntries(groupedByCity);
}
// You'll need to export it so the tests can run it.
