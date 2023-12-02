// Write your alignTexts function here! ✨

export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};
export function alignTexts(texts: string[], options: Options) {
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
		if (options.align || options.align !== "left") {
			for (let i = 0; i < lineArr.length; i++) {
				let line = lineArr[i];
				if (options.align === "right") {
					while (line.length < options.width) {
						line = " " + line;
					}
				} else {
					if (line.length < options.width) {
						line = " " + line;
					}
					while (line.length < options.width) {
						line = line + " ";
					}
				}
				console.log(line, line.length);
				lineArr[i] = line;
			}
		}
		allResults.push(lineArr);
	}
	return allResults;
}

// You'll need to export it so the tests can run it.
