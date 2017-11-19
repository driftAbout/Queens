'use strict';

var grid = 8;
var y = [];
var x = [];
var queens = [];

function Queen(all_xy, xy, y, x) {
  this.all_xy = all_xy;
  this.xy = xy;
  this.y = y;
  this.x = x;
  this.attack = false;
  this.diagonals = [];
  this.can_planer_attack();
  this.get_diagonal_attack_positions();
}

Queen.prototype.can_planer_attack = function() {
  var cords = ['(' + this.y + ',', ',' + this.x + ')'];
  for (var i = 0; i < cords.length; i++) {
    if (this.all_xy.join('').indexOf(cords[i]) != this.all_xy.join('').lastIndexOf(cords[i]) ){
      this.attack = true;
    }
  }
};

Queen.prototype.get_diagonal_attack_positions = function(){
  var sqr;
  for (var i = 1; i <= grid; i++){
    if (this.y - i > 0 && this.x - i > 0){
      sqr = '(' + (this.y - i) + ',' + (this.x - i) + ')';
      this.diagonals.push(sqr);
    }
    if (this.y - i > 0 && this.x + i <= grid) {
      sqr = '(' + (this.y - i) + ',' + (this.x + i) + ')';
      this.diagonals.push(sqr);
    }
    if (this.y + i <= grid && this.x + i <= grid) {
      sqr = '(' + (this.y + i) + ',' + (this.x + i) + ')';
      this.diagonals.push(sqr);
    }
    if (this.y + i <= grid && this.x - i > 0) {
      sqr = '(' + (this.y + i) + ',' + (this.x - i) + ')';
      this.diagonals.push(sqr);
    }
  }
  this.can_diagonal_attack();
};

Queen.prototype.can_diagonal_attack = function(){
  for (var i = 0; i < this.diagonals.length; i++) {
    if (this.all_xy.includes(this.diagonals[i])) {
      this.attack = true;
    }
  }
};

function EightQueens(strArr) {

  // code goes here
  var yNum;
  var xNum;

  for (var i = 0; i < strArr.length; i++){
    yNum = parseInt(strArr[i].substr(1, strArr[i].length - 2 ).split(',')[0]);
    y.push(yNum);
    xNum = parseInt(strArr[i].substr(1, strArr[i].length - 2 ).split(',')[1]);
    x.push(xNum);
    queens.push(new Queen(strArr, strArr[i], yNum, xNum));
  }

  console.log('queens: ', queens)

  //     y,x
  //     y, x+i
  //     y, x-i
  //     y+i, x
  //     y-i, x
  //
  //     var grid = 8;
  //     for (var i = 0; i <= grid; i++){
  //
  //         if (y-i > 0 && x - i > 0){
  //        var sqr = '(' + (y - grid) + ',' + (x - grid) ')';
  //         }
  //
  // y-i, x-i
  // y-i, x+i
  // y+i,x+i
  // y+i,x-i
  //
  // }


  return strArr;

}

// keep this function call here
var queensStrings = ['(2,1)', '(4,2)', '(6,3)', '(8,4)', '(3,5)', '(1,6)', '(7,7)', '(5,8)'];
EightQueens(queensStrings);
