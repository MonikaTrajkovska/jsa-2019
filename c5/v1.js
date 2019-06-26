//povikuvanje metod i URL vo browser
var http=require('http')
var server=http.createServer(function(req,res){
   
    res.write(`Method: ${req.method}, URL: ${req.url}`);
    
    res.end();
})
server.listen(8080,(err)=>{
    if(err){
        console.error(err);
        return
    }
    console.log('Server started succesfully')
})

var routes={
    get:[
        {
            route:'/students',
            func:getAllStudents
        },
        {
            route:'/students/:id',
            func:getAllStudents
        },
        {
            route:'/students/:id',
            func:getStudent
        }
    ],
    post: [
        {route: '/students/:id',func:updateStudent}
    ],
   
    put: [
        { route: '/students/:id', func: deleteStudent }
    ],
    patch: [],
    delete: [],
};
 var getAllStudents=()=>{};
 var getStudent=()=>{};
 var storeStudent=()=>{};
 var deleteStudent=()=>{};
 var updateStudent=()=>{};
 var patchStudent=()=>{};

//  /students/:id
//  /\students\/[a-zA-Z0-9\-])/

req.method="get";
req.url="/students/23";

if(routes[req.method][0].route==req.url){
    routes[req.method][0].func();
}