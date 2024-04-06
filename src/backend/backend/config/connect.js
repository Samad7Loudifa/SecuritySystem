const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/residents')
.then(
    ()=> {
        console.log('Connected');
    }
)
.catch((err)=> {
    console.log('Failed to connect');
})
module.exports = mongoose;