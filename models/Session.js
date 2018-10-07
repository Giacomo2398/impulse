const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessionSchema = new Schema ({
    //title is required and is a string
    title : {
        type: String,
        required: true
    },
    //url is required and is a string
    url: {
        type: String,
        required: true
    },
    //members is required and is an array
    members: {
        type: Array,
        required: true
    }
});

//Creates the Session model
const Session = mongoose.model("Session", SessionSchema);

//Export the Session model
module.exports = Session;