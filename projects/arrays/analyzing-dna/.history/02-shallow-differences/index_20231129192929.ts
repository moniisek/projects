// Write your shallowDifferences function here! ✨
export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const result = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			result.push(a[i]);
		} else {
			result.push(undefined);
		}
	}
}
// You'll need to export it so the tests can run it.
