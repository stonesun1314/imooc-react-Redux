const express = require('express')
const mongoose = require('mongoose')
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function() {
  console.log('mongo connect success');
})

//类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,required:true},
  age:{type:Number,required:true}
}))
//新增数据
// User.create({
//   user:'imooc',
//   age:18
// },function(err,doc) {
//   if(!err){
//     console.log(doc);
//   }else{
//     console.log(err);
//   }
// })

// User.remove({age:18},function(err,doc) {
//   console.log(doc);
// })

// User.update({'user':"xiaoming"},{'$set':{age:26}},function(params) {
//   console.log(doc);
// })


//新建App
const app = express()

app.get('/',function(req,res){
  res.send('<h1>Hello world React App</h1>')
})

app.get('/data',function(req,res) {
  User.find({},function(err,doc) {
    res.json(doc)
  })

})

app.listen(9093,function(){
  console.log('Node app start at port 9093');
})
