const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config')


//@route GET api/auth
//@desc Get logged in user
//@access Private

router.get('/', (req,res) => {
  res.send('Get logged in user')
})
//@route POST api/auth
//@desc Auth user & get token
//@access Public

router.post('/', [
  check('email', 'please include a valid email').isEmail(),
  check('password', 'password is required').exists()
], async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.errors.array()})
  }
  const {email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({msg: 'invalid credentials'})
    }
    const isMatch = await bycrpt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({msg:'invalid credentials'})
    }
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
  } catch (error) {
    
  }
})

module.exports = router