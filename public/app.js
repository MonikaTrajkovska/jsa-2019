var express=require('express');
var todoController=require('./controllers/todoController');

var app=express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
todoController(app);




app.listen(8080,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started succesfully ')
})