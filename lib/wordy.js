'use strict';

// var question = 'What is 1 plus 1?'; - regex this
// take in the question and make it workable by using regex
function WordProblem(question){
  this.question = question.replace('What is ', "").replace('?', "").replace(' plus ', '+').replace(' multiplied by ', '*').replace(' minus ', '-').replace(' divided by ', '/');
}

WordProblem.prototype.answer = function(){
  var num1 = Number(this.question[0]);
  var num2 = Number(this.question[2]);
  var operator = this.question[1];
  if(operator == "+") {  return num1 + num2;}
  if(operator == "*") {return num1 * num2;}
  if(operator == "-") {return num1 - num2;}
  if(operator == "/") {return num1 / num2;}
  else {throw new ArgumentError()};

}



  //   }
  //
  // };


//
// WordProblem.prototype.
//   return this.answer


  // WordProblem.prototype.answer = function(q){
  //     // debugger;

function ArgumentError(){};
