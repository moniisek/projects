// Write your deepDifferences function here! ✨
export function deepDifferences(a: string[][], b: string[][]) {
	const lengthNotEqual = (a: any[], b: any[]) => a.length !== b.length;

	if (lengthNotEqual(a, b)) {
		return undefined;
	}

	type SequenceResult = (string | undefined)[];
	const result: SequenceResult[] = [];

	let sequenceIdx = 0;
	while (a[sequenceIdx] !== undefined || b[sequenceIdx] !== undefined) {
		let charIdx = 0;
		const currentResult: SequenceResult = [];
		while (
			a[sequenceIdx][charIdx] !== undefined ||
			b[sequenceIdx][charIdx] !== undefined
		) {
			if (a[sequenceIdx][charIdx] === b[sequenceIdx][charIdx]) {
				currentResult.push(a[sequenceIdx][charIdx]);
			} else {
				currentResult.push(undefined);
			}
			charIdx++;
		}
		result.push(currentResult);
		sequenceIdx++;
	}

	return result;
}
// You'll need to export it so the tests can run it.
