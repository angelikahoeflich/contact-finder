const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get('/', auth, async (req,res) => {
  
  try {
    const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
    res.json(contacts)
  } catch (err) {
    console.log(err)
    res.status(500).send('server error')
  }
})
//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post('/', [auth,  [
  check('name', 'Name is required').not().isEmpty()
]], async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  const {name, email, phone, type} = req.body;
  try {
    const newContact = new Contact({
      name, 
      email,
      phone, 
      type,
      user: req.user.id
    });

    const contact = await newContact.save();
    res.json(contact)
  } catch (err) {
    console.log(err);
    res.status(500).send('server error')
  }
})
//@route PUT api/contacts/:id
//@desc Edit a contact
//@access Private
router.put('/', (req,res) => {
  res.send('edit a contact')
})
//@route DELETE api/contacts/:id
//@desc Delete a contact
//@access Private
router.delete('/', (req,res) => {
  res.send('delete contact ')
})

module.exports = router