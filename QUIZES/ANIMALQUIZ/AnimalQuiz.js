/*global $ */
$("#2").click(function(){
 var multiple = $("#a1").val();
     if (multiple == "answer 1") {
       $("#a").html("right");
       $("#a").css("color","green");
     } else {
       $("#a").html("wrong");
       $("#a").css("color","red");
     }
 var multiple = $("#b1").val();
     if (multiple == "answer 2") {
       $("#b").html("right");
       $("#b").css("color","green");
     } else {
       $("#b").html("wrong");
       $("#b").css("color","red");
     }
     var multiple = $("#c1").val();
     if (multiple == "answer 3") {
       $("#c").html("right");
       $("#c").css("color","green");
     } else {
       $("#c").html("wrong");
       $("#c").css("color","red");
     }
      var multiple = $("#d1").val();
     if (multiple == "answer 4") {
       $("#d").html("right");
       $("#d").css("color","green");
     } else {
       $("#d").html("wrong");
       $("#d").css("color","red");
     }
      var multiple = $("#e1").val();
     if (multiple == "answer 5") {
       $("#e").html("right");
       $("#e").css("color","green");
     } else {
       $("#e").html("wrong");
       $("#e").css("color","red");
     }
     });