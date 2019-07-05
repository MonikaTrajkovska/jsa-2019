var http=require('http');
var server= http.createServer(function(req,res){
    console.log(req);
 
    var URL=req.url.split('/');
    var output=0;
     switch(URL[1]){
        case'add':
        if(URL.length>2){
            for(let i=2;i<URL.length;i++){
                output +=parseInt(URL[i]);
             }
            }
        break;
        case 'subtract':
             var output=0;
            if(URL.length>=2){
                for( let i=2;i <URL.length;i++){
                  output=  parseInt(URL[2])- parseInt(URL[3]);
                  }
                 }
            break;
            case 'divide':
                var output=0;
                if(URL.length >=2){
                    for ( let i=2;i< URL.length;i++){
                    output= parseInt(URL[2]) / parseInt(URL[3])
                }
            }
                break;
                case 'multiply':
                    var output=1;
                    if(URL.length >=2){
                        for( let i=2; i <URL.length;i++){
                          output   *= parseInt(URL[i])
                        }
                    }
         break;
    }
    
    res.write(output + "")
    res.end();
   
})
server.listen(8080,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started successfully')
})










