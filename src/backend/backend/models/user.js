const mongoose = require('mongoose');
const User = mongoose.model('User',{

    email:{type:"string",},
    username:{type:"string",},
    password:{type:"string",}
})
module.exports = User;