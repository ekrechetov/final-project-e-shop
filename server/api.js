const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./dbmodels/user');

//get
router.get("/users", (req,res)=>{
    User.find({})
    .then(user=>{
        res.send(user);
    });
});

//post
router.post("/users", (req,res)=>{
    User.create(req.body)
    .then(user=>{
        res.send(user);
    });
});

//put
router.put("/users/:id", (req,res)=>{
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        User.findOne({_id: req.params.id})
            .then(user =>{
                res.send(user);
            });
    });
});

//delete
router.delete("/users/:id", (req,res)=>{
    User.deleteOne({_id: req.params.id})
    .then(user=>{
        res.send(user);
    });
});


module.exports = router;