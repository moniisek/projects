// Write your alignTexts function here! ✨

export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};
export function alignTexts(texts: string[], options: AlignmentOptions) {
	const allResults = [];

	for (const lineStr of texts) {
		const words = lineStr.split(" ");
		let line = words[0];
		const lineArr: string[] = [];
		for (let i = 1; i < words.length; i++) {
			if (line.length + 1 + words[i].length <= options.width) {
				line += " " + words[i];
			} else {
				lineArr.push(line);
				line = words[i];
			}
		}
		lineArr.push(line);

		// if extra space in word, align
		allResults.push(alignLines(lineArr, options));
	}
	return allResults;
}

function alignLines(
	lines: string[],
	{ align = "left", width }: AlignmentOptions
) {
	const aligned: string[] = [];

	for (const line of lines) {
		const remainingSpaces = width - line.length;
		let newLine = line;

		if (remainingSpaces) {
			switch (align) {
				case "left":
					for (let i = 0; i < remainingSpaces; i += 1) {
						newLine += " ";
					}
					break;

				case "middle":
					for (let i = 0; i < Math.ceil(remainingSpaces / 2); i += 1) {
						newLine += " ";
					}

					for (let i = 0; i < Math.floor(remainingSpaces / 2); i += 1) {
						newLine = " " + newLine;
					}

					break;

				case "right":
					for (let i = 0; i < remainingSpaces; i += 1) {
						newLine = " " + newLine;
					}
					break;
			}
		}

		aligned.push(newLine);
	}

	return aligned;
}

// You'll need to export it so the tests can run it.
