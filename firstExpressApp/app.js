var express=require('express');
var app=express();


app.get('/',function(req,res){
    res.send("hi there")
});

app.get('/bye',function(){
    res.send('Good bye')
})
app.get('/dog',function(req,res){
    res.send('I have a page for dog')
})



app.listen(8080,(err)=>{
    if(err){
        console.error(err);
        return}
    
    console.log('Server started');})