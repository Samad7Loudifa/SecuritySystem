const express = require('express');
const Rroute= require('./routes/resident');
const Groute= require('./routes/guest');
const Uroute= require('./routes/user');
require('./config/connect');
const app = express();
app.use(express.json());

// endpoints

app.use('/resident',Rroute);
app.use('/guest',Groute);
app.use('/user',Uroute);
app.use('/getimage', express.static('./uploads'));

app.listen(3000,()=>{
    console.log('CHOFONI HAHAHAHA')
});







