const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config')


//@route POST api/users
//@desc Register a user
//@access Public
router.post('/', [
  check('name', 'Please add a name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
],async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.errors.array()})
  }

  const { name, email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if(user){
      res.status(400).json({msg:'User already exists'})
    }
    user = new User({
      name,
      email,
      password
    })
    const salt = await bcrypt.getSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save()

    const payload = {
      user: {
        id:user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn:36000
    }, (err, token) => {
      if(err) throw err;
      res.json({token})
    } )

  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

module.exports = router