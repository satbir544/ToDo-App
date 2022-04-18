const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
	text: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		default: new Date()
	}
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;