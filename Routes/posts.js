const express=require('express');
const Router=express.Router();
const Post=require('../Models/post');


//fetch all posts

Router.get('/',async(req,res)=>{

    try{
    const posts=await Post.find();
    res.json(posts);

    }
    catch(err){
        res.json({message:err})
    }
   
});


// save posts in db 
Router.post('/',async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });

    try{
    const savedpost=await post.save();
    res.json(savedpost);

    }
    catch(err){
        res.json({message:err});
    }
})
// fetch specific record 


Router.get('/:postid',async(req,res)=>{

    try{
    const posts=await Post.findById(req.params.postid);
    res.json(posts);

    }
    catch(err){
        res.json({message:err})
    }
   
});

// delete a post
Router.delete('/:postid',async(req,res)=>{

    try{
   const remove=await Post.remove({_id:req.params.postid});

    }
    catch(err){
        res.json({message:err});
    }
});

//update 

Router.patch('/:postId',async(req,res)=>{
    try{
        const updatepost=await Post.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title}}
        );
        res.json(updatepost);

    }
    catch(err){
        res.json({message:err});
    }
});


module.exports=Router;