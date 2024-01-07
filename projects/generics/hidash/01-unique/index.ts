// Write your unique function here! ✨
export function unique<T>(...items: T[][]): T[] {
	// takes in any number of arrays
	// returns an array containing unique items
	// from the input arrays
	const result: Set<T> = new Set();
	for (const arr of items) {
		for (const t of arr) {
			if (result.has(t) == false) {
				result.add(t);
			}
		}
	}
	return Array.from(result);
}
// You'll need to export it so the tests can run it.
