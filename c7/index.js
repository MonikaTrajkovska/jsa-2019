var express = require('express');//instalirame express
var students=require('./handlers/students');
var calculator= require('./handlers/calculator')
var api = express();                        
 //pravime instanca na express bibliotekata 
 
api.get('/students',students.GetAllStudents);                      
  // se definira ruta (zakacuvame get method na api i se izvrsuva funkcijata)
 

api.get('/students/:id', students.GetStudentById);                  
   //kako ke bide vo api.get povikano taka i so req.params. primer reg.params.name/id 
 
                          

api.get('/students/:id/grades/:sub', students.GetStudentSubjectGrades );

api.get('/calc/:op/:a/:b',calculator.Calculator);




 api.listen(8080, (err)=>{
     if(err){
         console.error(err);
         return;
     }
     console.log('Server started successfully')
 })    // se starta vo terminal so npm start i sekogas se povikuva na toj nacin 