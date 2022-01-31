const _ = require('lodash');

function randomQuestion(questions) {
	const keys = _.keys(questions);
	const principle = _.sample(keys);
	const question = _.sample(questions[principle]);
	return {
		principle,
		question
	}
}


export {
	randomQuestion
}