const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })

mongoose.connect("mongodb+srv://tarang:tarang0198@cluster0.vyvqbsk.mongodb.net/?retryWrites=true&w=majority",()=>{
  console.log("Connectd to chat app");
})