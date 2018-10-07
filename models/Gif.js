const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GifSchema = new Schema({
	//icon is required and a type of string
	icon: {
		type: Object,
		required: true
	},
	//theme is required and a type of string
	theme: {
		type: String,
		required: true
	},
	//color is required and a type of string
	color: {
		type: String,
		required: true
	},
	//category is required and an array
	categories: {
		type: Array,
		required: true
	}
});

//Creates the Gif model
const Gif = mongoose.model("Gif", GifSchema);

//Export the Gif model
module.exports = Gif;