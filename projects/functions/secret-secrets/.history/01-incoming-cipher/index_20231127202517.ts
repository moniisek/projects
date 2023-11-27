// Write your createCipher function here! ✨
export function createCipher(cipher: (text: string) => string) {
	return function (text: string) {
		const result = [];
		for (const c of text) {
			result.push(cipher(text));
		}
		return result.join("");
	};
}
// You'll need to export it so the tests can run it.
