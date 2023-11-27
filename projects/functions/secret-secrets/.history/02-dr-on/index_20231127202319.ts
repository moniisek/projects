// Write your createAdvancedCipher function here! ✨
type StringFunc = (t: string) => string;

export function createAdvancedCipher(
	onVowel: StringFunc,
	onConsonant: StringFunc,
	onPunctuation: StringFunc
) {
	return function (text: string) {
		const result = [];
		for (const c of text) {
			switch (true) {
				case /[aeiou]/i.test(c):
					result.push(onVowel(c));
					break;
				case /[bcdfghjklmnpqrstvwxyz]/i.test(c):
					result.push(onConsonant(c));
					break;
				default:
					result.push(onPunctuation(c));
					break;
			}
		}
		return result.join("");
	};
}
// You'll need to export it so the tests can run it.
