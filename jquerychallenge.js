$(document).ready(function(){
  var answer = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"];
  var randomNum = Math.floor(Math.random()*answer.length);

  $("button").click(function(){
      $("#questionAnswer").replaceWith(answer[randomNum]+"<br>")






  });





});


// var numGuess=0;
// do{
//  input = prompt("enter your question!");
//  alert(answer[Math.floor(Math.random()*answer.length)]);
//  numGuess++
// }while(input != "STOP" && numGuess<6);
