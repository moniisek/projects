// Write your createCipher function here! ✨
export function createCipher(cipher: (text: string) => string) {
	return function (text: string) {
		return cipher(text);
	};
}
// You'll need to export it so the tests can run it.
