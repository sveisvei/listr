'use strict';
/**
 * The `.render()` method returns the output
 */
class SummaryRenderer {

	constructor(tasks) {
		this._tasks = tasks;
	}

	render() {

	}

	end() {
		this._rendering = false;
		console.log(this._tasks.map(task => task.render()).join('\n'));
	}
}

module.exports = SummaryRenderer;
