// Write your deepEquality function here! ✨
export function deepEquality(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return false;
	}
	for (let sequenceNo = 0; sequenceNo < a.length; sequenceNo++) {
		if (a[sequenceNo].length !== b[sequenceNo].length) {
			return false;
		}
		for (let elNo = 0; elNo < a[sequenceNo].length; elNo++) {
			if (a[sequenceNo][elNo] !== b[sequenceNo][elNo]) {
				return false;
			}
		}
	}
	return true;
}
// You'll need to export it so the tests can run it.
