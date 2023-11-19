// Put your announceMachines function here! ✨
function announceMachines(announce, ...machines) {
	let label;
	let labelsCount = 0;

	for (const machine of machines) {
		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}
		announce(label);
	}
}
// See ./original.js for its older JavaScript code.

module.exports.announceMachines = announceMachines;
