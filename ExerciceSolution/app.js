var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('Welcome to my assignemnt')
});
app.get('/speak/animal:',function(req,res){
    var animal={
        pig:"oink",
        dog:"woof",
        cow:"mu",
    }
    var animal=req.params.animal.toLowerCase();
    var sound=sound[animal];
   
    res.send('The ' +animal +'says' +sound)
});
app.get('/repeat/:messge/:times',function(req,res){
    var message=req.params.message;
    var times=Number(req.params.times);
    var result="";
    for (var i=0;i<times;i++){
        result += message + " "
    }
    res.send(result)
})
app.get('*',function(req,res){
    res.send('You have an error ')
})

app.listen(8080,(err)=>{
    if(err){
        console.error(err);
        return
    }
    console.log('Server started successfully ')
})