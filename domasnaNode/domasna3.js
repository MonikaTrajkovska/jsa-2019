var fs=require('fs');
var lorem=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante mi, rutrum ut est a, vulputate viverra eros. Fusce magna ante, rhoncus sed massa quis, vehicula pretium purus. Phasellus laoreet sodales sem vel sagittis. Sed facilisis ullamcorper varius. Nullam vitae ultricies ipsum, non vehicula dui. Nam ligula mauris, consectetur vitae arcu ut, eleifend ornare justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Donec venenatis nulla sem, ac vestibulum tortor ornare eu. Donec tempus lorem scelerisque porta blandit. Proin interdum sagittis nisi nec condimentum. Aenean ultrices enim at nisi auctor interdum. Donec aliquet erat tincidunt nunc pulvinar, eu fermentum ante ullamcorper. Ut aliquam sagittis ante, nec tempus nunc imperdiet convallis. Suspendisse elit nulla, finibus eget euismod a, dignissim in odio. Aliquam erat volutpat. In pulvinar tincidunt fermentum. Ut sapien lacus, fringilla eget consequat elementum, varius at est. Pellentesque faucibus metus mollis odio pellentesque, vel cursus tortor pretium. Proin at bibendum nulla. Morbi vel consectetur diam. Morbi ac accumsan sapien, sed dapibus ipsum. Duis in condimentum felis, eu sodales neque.

Fusce vulputate maximus dignissim. Etiam accumsan quis ligula at feugiat. Mauris quis pretium enim, tempor pretium massa. Cras posuere condimentum lacus quis cursus. Nulla sit amet lacinia nulla, et posuere neque. Etiam vitae bibendum erat, vel gravida risus. Curabitur vitae dolor odio.

Vestibulum non mi eu justo vulputate porttitor. Curabitur tristique condimentum quam vel hendrerit. Etiam convallis purus et sapien venenatis vehicula. Morbi quis sem vel quam tincidunt aliquet ac sit amet velit. Sed facilisis eleifend nunc, at vehicula elit malesuada ut. Nam vitae rutrum eros, eget blandit diam. Vivamus scelerisque ac ligula non blandit. Nam id turpis et nibh consectetur tincidunt. Mauris ac hendrerit quam. Donec tristique tellus velit, eget viverra odio elementum ornare. Duis sit amet mauris vehicula, commodo purus eu, commodo magna.

Mauris sed mauris sed tellus consectetur vehicula. In hac habitasse platea dictumst. Aenean eu enim lorem. Pellentesque sodales posuere blandit. Ut at augue luctus, eleifend sapien quis, tempor purus. In eu volutpat tortor, nec pretium libero. Morbi at odio ac magna dapibus convallis.`


fs.writeFile('test2.txt',lorem,(err)=>{
         if(err){
            console.error(err);
         }
     });
     fs.readFile("test2.txt","utf8",(err,data)=>{
       if(err){
         console.log(err)
       }

       totalCount(data);
       storyWords(data);
       letterCount(data);
       wordCount(data);
       
     })
     //broj na  zborovi 
     
     var totalCount=(data)=>{
      var result=data.split(" ");
      console.log((result.length))
     }
    
     //broj na recenici vo tekst
     var storyWords=(str)=>{
       var storyWords = lorem.split(' ');
      var sentences = 0;
      storyWords.forEach(word => {
        if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
          sentences += 1;
        }
      });
      console.log(`vo tekstot ima ${sentences + (' recenici ')}`);
     }
      //broj na karakteri
      var letterCount=(str)=>{
        var letterCount = str.replace(/\s+/g, '').length;
  
        console.log(`Vo tekstot ima ${letterCount} bukvi  `);
        
       }
//zborovi so pomalku od 7 karakteri 
 var wordCount = (str) => { 
      var array = []; 
      var array2 = [];
      var array3 = [];
   
  
       var words = str.replace(/,/g,'').split(" ");
         for(var i = 0; i < words.length;i++){
           if(words[i].length > 7) {
              array.push(words[i]);
           }
           else if(words[i].length <7 ){
               array2.push(words[i])
           }
           else{
               array3.push(words[i])
           }

    }
console.log(array.length);
console.log(array2.length);
console.log(array3.length);
console.log(words.length)
}
       