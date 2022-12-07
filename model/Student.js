const express = require("express");
const res = require("express/lib/response");
const route = express.Router();
const user = require('./users');

const student = async(req,res,next)=> {
    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await user.find();
        res.status(200).json(users);
        console.log(users)
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is student post request'
        
    })
})




module.exports = router;