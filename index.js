
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
const { use } = require('express/lib/application');
const mongoose = require('mongoose');
const user = require('./model/users')
const res = require('express/lib/response');
const req = require('express/lib/request');
const route = require('./route/route')
const bodyParser = require('body-parser');
const { Router, response, request } = require('express');

app.use(express.json());


app.get('/', async (request, response) => {

        const users = await user.find().then((data)=>{
            response.status(201).json(data)
        })
   
})
app.post('/',async(req,res)=>{
            const data = new user(req.body)
            const result= await data.save();
         console.log(result)
         res.send(result)
})
app.get('/:id',async(req,res)=> {

              user.findById(req.params.id)
              .then(result=> {
         res.json(result)
              })
             .catch(err=>{
                res.json(err)
             })   
})
app.put('/:id',async(req,res)=>{
    let User = await user.findById(req.params.id);
    User = req.body;

    const editUser = new user(User);
    try{
        await user.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})
app.delete('/:id',async(req,res)=>{
    try{
        await user.deleteOne({_id: req.params.id});
        res.status(201).json("User deleted Successfully");
        console.log('User deleted Successfully')
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
})


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

 mongoose.connect('mongodb+srv://user123:sX1WsbYrcS8eaBcK@cluster0.51384.mongodb.net/mango?retryWrites=true&w=majority',

{
    useNewUrlparser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.warn("db connection done");
}).catch(()=> {
    console.warn("internet connection is fall");
});








app.listen(4000)
   
