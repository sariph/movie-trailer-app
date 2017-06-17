/**
 * Created by avipokhrel on 6/16/17.
 */
var mongoose = require('mongoose');

// Create the TrailerSchema.
var TrailerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    publishedOn: {
        type: Date,
        'default': Date.now
    },
    description: {
        type: String,
        required: false
    }

});

// Export the model.
module.exports = mongoose.model('trailer', TrailerSchema);

