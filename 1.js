const fs = require('fs');
fs.readFile('./1.txt', function (err, data) {
    if (err) {
      throw err; 
    }
    var input = data.toString().split(/\r?\n/);
    input.forEach((item1,index)=>{ 
        input.forEach((item2,index)=>{
            if(Number(item1)+Number(item2) ==2020){
                console.log(`Part1  ${item1*item2}`);            
            }
        })
    })

    input.forEach((item1,index)=>{ 
        input.forEach((item2,index)=>{
            input.forEach((item3,index)=>{
                if(Number(item1)+Number(item2)+Number(item3) ==2020){
                    console.log(`Part2  ${item1*item2*item3}`);
                }
            })
        })
    })

  });
