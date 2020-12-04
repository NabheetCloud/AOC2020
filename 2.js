const fs = require("fs");
fs.readFile("./2.txt", function (err, data) {
  if (err) {
    throw err;
  }
  var input = data.toString().split(/\r?\n/);
  let count = 0;
  input.forEach((item, index) => {
    let parts = item.split(" ");
    let range = parts[0].split("-");
    let length = Number(parts[2].split(parts[1].substring(0, 1)).length - 1);
    if (Number(range[0]) <= length && length <= Number(range[1])) {
      count += 1;
    }
  });
  console.log(`Part1 Count is ${count}`);

  count = 0;
  input.forEach((item, index) => {
    let parts = item.split(" ");
    let range = parts[0].split("-");
    if(
      ( parts[2].substring(range[0]-1,range[0]) == parts[1].substring(0, 1) &&
      parts[2].substring(range[1]-1,range[1]) != parts[1].substring(0, 1) ) 
      ||
      ( parts[2].substring(range[0]-1,range[0]) != parts[1].substring(0, 1) &&
      parts[2].substring(range[1]-1,range[1]) == parts[1].substring(0, 1) ) 
    ){
      count += 1;
    }
  });
  console.log(`Part2 Count is ${count}`);
});
