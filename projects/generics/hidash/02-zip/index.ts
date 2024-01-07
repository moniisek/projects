// Write your zip function here! ✨
export function zip<T, U>(a: T[], b: U[]): (T | U)[] {
	const result = new Array(a.length + b.length);

	let aIdx = 0;
	let bIdx = 0;
	let i = 0;
	while (true) {
		if (aIdx < a.length && bIdx < b.length) {
			result[i] = a[aIdx];
			aIdx++;
			i++;

			result[i] = b[bIdx];
			bIdx++;
			i++;
		} else if (aIdx < a.length) {
			result[i] = a[aIdx];
			aIdx++;
			i++;
		} else if (bIdx < b.length) {
			result[i] = b[bIdx];
			bIdx++;
			i++;
		} else {
			break;
		}
	}

	return result;
}
// You'll need to export it so the tests can run it.
