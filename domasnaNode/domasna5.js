var http = require('http');

var server = http.createServer((req, res) => {
    //  res.write(`Method: ${req.method}, URL: ${req.url}`);
    // res.end();

    var routes = {
        get: [
            { route: '/students', func: getAllStudents },
            { route: '/students/:id', func: getStudent }
        ],
        post: [
            { route: '/students', func: storeStudent }
        ],
        put: [
            { route: '/students/:id', func: updateStudent }
        ],
        patch: [
            { route: '/students/:id', func: patchStudent }
        ],
        delete: [
            { route: '/students/:id', func: deleteStudent }
        ]
    };
    
    function getAllStudents (str) {
        req.method = "get";
        // req.url = "/students";
        var regex=/^((http[s]?|ftp):\/)?\/?\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:([a-zA-Z0-9]+)\/([a-zA-Z0-9\-_]*)/;
        
        if (!regex.test(str)){
            console.log("GRET");
           return false;
           
        }
        else{
            console.log("Brvo");
            return true
        }
       
        }
        
        


        
     
   

    var getStudent = () => {};
    var storeStudent = () => {};
    var deleteStudent = () => { console.log('student deleted')};
    var updateStudent = () => {};
    var patchStudent = () => {};
    
    
   

server.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
})