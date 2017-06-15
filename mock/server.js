let express = require('express');
let app = express();
app.listen(3000);

let slider = require('./home/slider')
app.get('/api/slider',(req,res)=>{
    res.send(slider)
})

let btn = require('./home/btn')
app.get('/api/btn',(req,res)=>{
    res.send(btn)
})

let getList = require('./home/docList')
app.get('/api/getlist',(req,res)=>{
    res.send(getList)
})

let detailDoc = require('./detail/detailDoc')
app.get('/api/detailDoc',(req,res)=>{
    res.send(detailDoc)
})