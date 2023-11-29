// Write your deepDifferences function here! ✨
export function deepDifferences(a: string[][], b: string[][]) {
	const lengthNotEqual = (a: any[], b: any[]) => a.length !== b.length;

	if (lengthNotEqual(a, b)) {
		return undefined;
	}

	type SequenceResult = (string | undefined)[];
	const result: SequenceResult[] = [];

	const length = a.length >= b.length ? a.length : b.length;

	for (let sequenceIdx = 0; sequenceIdx < length; sequenceIdx++) {
		const currentResult: SequenceResult = [];
		const sequenceLength =
			a[sequenceIdx].length >= b[sequenceIdx].length
				? a[sequenceIdx].length
				: b[sequenceIdx].length;
		for (let charIdx = 0; charIdx < sequenceLength; charIdx++) {
			if (a[sequenceIdx][charIdx] === b[sequenceIdx][charIdx]) {
				currentResult.push(a[sequenceIdx][charIdx]);
			} else {
				currentResult.push(undefined);
			}
		}
		result.push(currentResult);
	}
	return result;
}
// You'll need to export it so the tests can run it.
