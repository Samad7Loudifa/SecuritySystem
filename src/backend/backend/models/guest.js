const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: { type: String },
    Image: { type: String },
    ID: { type: String },
    datetime: { type: Date, default: Date.now }, // Adding datetime field
    banned:{type: Boolean, default: false},
    resident: { type: mongoose.Schema.Types.ObjectId, ref: 'Resident' } // Reference to Resident model
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
