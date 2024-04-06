const express = require('express');
const router = express.Router();
const Resident = require('../models/resident');
const cors = require('cors');
router.use(cors());

router.post('/addresident', (req,res) => {
    data=req.body;
    resident = new Resident(data);
    resident.save()
        .then((savedresident) => {
            res.send(savedresident);
        })
        .catch((err) => {
            res.send(err);
        })
    
    });
    
    router.get('/getallresidents', (req,res) => {
        Resident.find()
        .then((resident) => {
            res.send(resident);
        })
        .catch((err) => {res.send(err);
        });
    });
    
    router.get('/getresidentbyid/:id',(req,res) => {
        myid = req.params.id;
        Resident.findOne({ _id : myid})
        .then(
            (resident)=>{
                req.send(resident)
            }
        )
        .catch(
            (err)=>{res.send(err)}
        )
    });
    
    router.put('/updateresident/:id',(req,res)=> {
        myid = req.params.id;
        newdata = req.body;
        Resident.findByIdAndUpdate({ _id : myid}, newdata)
        .then(
            (resident)=>{
                res.send(resident)
            }
        )
        .catch(
            (err)=>{res.send(err)}
        )
    });
    
    router.delete('/deleteresident/:id',(req,res)=> {
        myid = req.params.id;
        
        Resident.findOneAndDelete({ _id : myid})
        .then(
            (resident)=>{
                res.send(resident)
            }
        )
        .catch(
            (err)=>{res.send(err)}
        )
    });


module.exports = router;