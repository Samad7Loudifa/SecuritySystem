const mongoose = require('mongoose');
const Resident = mongoose.model('Resident',
{
    name:{type: 'string',},
    flat:{type: 'string',},
})
module.exports = Resident;