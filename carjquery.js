$(document).ready(function(){
    // var makeCar = make + model + year
  $("#carInfo").click(function(){
    var carMake = $("#make").val();
    var carModel = $("#model").val();
    var carYear = $("#year").val();

    $("div").replaceWith("Make: " + carMake + " Model: " + carModel + " Year: " + carYear);

  });
  var speed=10;
  $("#fast").click(function(){
      if (speed < 85) {
        speed = speed + 10;
      }
      $("#mph").text(speed);
  });
  $("#slow").click(function(){
      if (speed > 10){
        speed = speed - 10;
      }
      $("#mph").text(speed);
  });
  $("#ice").click(function(){
      var mySlip= Math.floor((Math.random()*(speed*2))+1)-speed;
      speed = speed + mySlip
      $("#mph").text(speed);
  });

});
