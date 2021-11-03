const express = require('express')
const router = express.Router()
const SignUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (req, res) => {
   const signedUpUser = new SignUpTemplateCopy({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       username: req.body.username,
       password: req.body.password
   })
   signedUpUser.save()
   .then(data =>{
       res.json(data)
   })
   .catch(error => {
       res.json(error)
   })
})

module.exports = router