var fs = require('fs');

var GetAllFood = (req, res) => {
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            throw err;
        }else{
         var jData = JSON.parse(data);
           var Data={};
           Data.hrana= jData;
      res.render("first",Data);
        }
    });
};


module.exports = {

  GetAllFood,
 
    
}

