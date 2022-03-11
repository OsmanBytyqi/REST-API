const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Router=require('./Routes/posts');
const bodyParser=require('body-parser');

require('dotenv/config');
app.use(bodyParser.json());



app.use('/posts',Router);



// database connection
 // 


 const port = process.env.PORT || 3000;
 mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
   
   .then(result => app.listen(port))
   .then(result=> console.log(`your server is running at http://localhost:${port}`))
   .catch(err => console.log(err));



//Routes
app.get('/',(req,res)=>{
  res.send('you are home now');
});
 
