const express = require('express');
const router = express.Router();


//@route GET api/contacts
//@desc Get all users contacts
//@access Private
router.get('/', (req,res) => {
  res.send('get all contacts')
})
//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post('/', (req,res) => {
  res.send('add a new contact')
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