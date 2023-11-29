// Write your deepDifferences function here! ✨
export function deepDifferences(a: string[][], b: string[][]) {
	const lengthNotEqual = (a: any[], b: any[]) => a.length !== b.length;

	if (lengthNotEqual(a, b)) {
		return undefined;
	}

	type SequenceResult = (string | undefined)[];
	const result: SequenceResult[] = [];

	for (let sequenceIdx = 0; sequenceIdx < a.length; sequenceIdx++) {
		if (lengthNotEqual(a[sequenceIdx], b[sequenceIdx])) {
			result.push([undefined]);
			continue;
		}
		const currentResult: SequenceResult = [];

		for (let charIdx = 0; charIdx < a[sequenceIdx].length; charIdx++) {
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
