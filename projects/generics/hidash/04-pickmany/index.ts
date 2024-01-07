// Write your pickMany function here! ✨
export function pickMany<T, K extends keyof T>(container: T, keys: K[]) {
	const result = [];
	for (const key of keys) {
		result.push(container[key]);
	}
	return result;
}
// You'll need to export it so the tests can run it.
