// Write your createCipher function here! ✨
export function createCipher(cipher: (text: string) => string) {
	return function (text: string) {
		let result = "";
		for (const c of text) {
			result += cipher(text);
		}
		return result;
	};
}
// You'll need to export it so the tests can run it.
