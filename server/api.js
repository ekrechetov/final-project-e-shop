// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('./dbmodels/user');

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');

const User = require('./dbmodels/user');
const Product = require('./dbmodels/product')

router.get('/find/:id', function (req, res) {
    console.log(req.params.id)
    Product.findOne({
        _id: req.params.id
    })
        .then(data => {
            console.log(data)
            res.send(data)
        })
    // find('products', {_id : "5d1dff5f5605794c0deeb9b4"})
    // .then(res => console.log(res))
})
router.post('/add-product', function (req, res) {
    const newProduct = new Product({
        brand: req.body.brand,
        title: req.body.title,
        code: req.body.code,
        description: req.body.description,
        category: req.body.category,
        images: req.body.images,
        availability: req.body.availability,
        price: req.body.price,
    });
    newProduct
        .save()
        .then(product => {
            res.json(product)
        });
})

router.post('/register', function (req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) console.error('There was an error', err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                });
                        }
                    });
                }
            });
        }
    });
});

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        }
                        jwt.sign(payload, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) console.error('There is some error in token', err);
                            else {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        });
                    }
                    else {
                        errors.password = 'Incorrect Password';
                        return res.status(400).json(errors);
                    }
                });
        });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

//get
// router.get("/users", (req,res)=>{
//     User.find({})
//     .then(user=>{
//         res.send(user);
//     });
// });
//get
router.get("/categories/", (req,res)=>{
    Product.find({})
    .then(product=>{
        res.send(product);
    });
});
router.get("/categories/:alias", (req,res)=>{
    Product.find({ alias: req.params.alias })
    .then(product=>{
        res.send(product);
    });
});

// post prod
router.post("/addprod", (req,res)=>{
    Product.create(req.body)
    .then(product=>{
        res.send(product);
    });
});

//post
// router.post("/register", (req,res)=>{
//     User.create(req.body)
//     .then(user=>{
//         res.send(user);
//     });
// });

//put
router.put("/users/:id", (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            User.findOne({ _id: req.params.id })
                .then(user => {
                    res.send(user);
                });
        });
});

//delete
router.delete("/users/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(user => {
            res.send(user);
        });
});


module.exports = router;