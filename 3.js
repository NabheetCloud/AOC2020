const fs = require("fs");
fs.readFile("./3.txt", function (err, data) {
  if (err) {
    throw err;
  }
  var input = data.toString().split(/\r?\n/);
  let xMove = 3;
  let yMove = 1;
  let rowCount = 0;
  let count = 0;
  while (rowCount < input.length - yMove) {
    if (input[rowCount + yMove][xMove] == "#") {
      count = count + 1;
    }
    xMove = (xMove + 3) % 31;
    // console.log(" move" + xMove);
    rowCount += 1;
  }
  console.log(`Part1 ${count}`);

  let moves = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 }
  ];
  let part2=1;
  moves.forEach((item, index) => {
    xMove = item.right;
    yMove = item.down;
    rowCount = 0;
    count = 0;
    while (rowCount < input.length - yMove) {
      if (input[rowCount + yMove][xMove] == "#") {
        count = count + 1;
      }
      xMove = (xMove + item.right) % 31;
      rowCount  = rowCount + item.down;
    }
    part2*=count;
  });
  console.log(`Part2 ${part2}`);
});
