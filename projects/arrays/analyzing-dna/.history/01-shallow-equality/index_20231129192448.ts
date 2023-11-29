// Write your shallowEquality function here! ✨
export function shallowEquality(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return false;
	}

	const aSorted = a.slice();
	aSorted.sort();

	const bSorted = b.slice();
	bSorted.sort();

	for (let i = 0; i < aSorted.length; i++) {
		if (aSorted[i] !== bSorted[i]) {
			return false;
		}
	}
	return true;
}
// You'll need to export it so the tests can run it.
