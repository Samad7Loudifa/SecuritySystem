const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');
const multer = require('multer');
const cors = require('cors');
router.use(cors());

filename= "";

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => { 
        const date = Date.now();
        const ext = file.mimetype.split('/')[1]; // Get the extension from mimetype
        const fl = `${date}.${ext}`; // Concatenate date and extension
        filename = fl; // Assign filename here
        callback(null, fl);
    }
});
const upload = multer({ storage: mystorage });


// ====GUEST PART====

router.post('/addguest', upload.any('image'), (req, res) => {
    const data = req.body;
    const guest = new Guest(data);
    guest.Image = filename; // Assign filename to guest.Image
    filename = ''; // Clear filename for the next request

    // Assuming 'residentId' is sent in the request body to link the guest to a resident
    if (data.residentId) {
        guest.resident = data.residentId;
    }

    guest.save()
        .then(savedGuest => {
            res.status(201).json(savedGuest);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err });
        });
});


router.get('/getallguests', (req, res) => {
    Guest.find()
        .populate('resident', 'name') // Populate the resident field, returning only the name
        .then((guests) => {
            res.send(guests);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
});


router.get('/getguestbyid/:id',(req,res) => {
    myid = req.params.id;
    Guest.findOne({ _id : myid})
    .then(
        (guest)=>{
            res.send(guest)
        }
    )
    .catch(
        (err)=>{res.send(err)}
    )
})

router.get('/ismfbanned/:id', (req, res) => {
    const myid = req.params.id; // Use req.params.id instead of req.params.ID
    Guest.findOne({ ID: myid }) // Use 'ID' instead of '_id'
    .then(guest => {
        if (guest) {
            res.status(200).json(guest); // Send the guest object as JSON response
        } else {
            res.status(404).json({ message: 'Guest not found' });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    });
});



router.use(upload.any());
router.put('/updateguest/:id', (req, res) => {
    const myid = req.params.id;
    const newdata = req.body;

    Guest.findByIdAndUpdate(myid, newdata, { new: true })
        .then(updatedGuest => {
            if (!updatedGuest) {
                return res.status(404).send("Guest not found");
            }
            res.send(updatedGuest);
            console.log(req.body);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.delete('/deleteguest/:id',(req,res)=> {
    myid = req.params.id;
    
    Guest.findOneAndDelete({ _id : myid})
    .then(
        (guest)=>{
            res.send(guest)
        }
    )
    .catch(
        (err)=>{res.send(err)}
    )
})

module.exports = router;