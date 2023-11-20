// Put your checkEmotion and speak functions here! ✨
async function checkEmotion(knownEmotions, emotion) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(knownEmotions.has(emotion)), 1000);
	});
}

async function speak(knownEmotions, newEmotion, phrase) {
	let checkEmotionResult = await checkEmotion(knownEmotions, newEmotion);
	if (checkEmotionResult) {
		return `"${phrase}" (${newEmotion})`;
	} else {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}
}

// See ./original.js for their older JavaScript code.

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
