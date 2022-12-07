const express = require('express');
const User = require ('../model/users');

const router = express.Router();

router.get('/', async (request, response) => {
    // Step -1 // Test API
    
    try{
      //  response.send('hello kushwah G');
        // finding something inside a model is time taking, so we need to add await
        const users = await user.find().then((data)=>{
            response.status(201).json(data)
        })
        
    }catch( error ){
         response.status(404).json({ message: error.message })
    }
})

module.exports.router = router;