const express=require('express');
const Router=express.Router();


Router.get('/',(req,res)=>{
    res.send('you are on posts');
})

Router.get('/specific',(req,res)=>{
    res.send('specific route')
})

module.exports=Router;