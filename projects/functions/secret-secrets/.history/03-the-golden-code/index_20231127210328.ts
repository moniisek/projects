// Write your createCodeCracker function here! ✨
type MakeGuess = (text: string, attempt: number) => string;
type ValidateGuess = (guess: string) => boolean;
type CodeCrackerProps = {
	attempts: number;
	makeGuess: MakeGuess;
	validateGuess: ValidateGuess;
};
export function createCodeCracker(props: CodeCrackerProps) {
	return (text: string): string | undefined => {
		let attempt = 0;
		while (attempt < props.attempts) {
			const guess = props.makeGuess(text, attempt);
			if (props.validateGuess(guess)) {
				return guess;
			}
			attempt += 1;
		}
		return undefined;
	};
}
// You'll need to export it so the tests can run it.
