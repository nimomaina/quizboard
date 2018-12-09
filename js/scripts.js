$(document).ready(function(){


      $("form.questions").submit(function(event){
      var q1= $("input:radio[name=q1]:checked").val();
      var q2= $("input:radio[name=q2]:checked").val();
      var q3= $("input:radio[name=q3]:checked").val();
      var q4= $("input:radio[name=q4]:checked").val();
      var q5= $("input:radio[name=q5]:checked").val();
      var result=parseInt(q1)+parseInt(q2)+parseInt(q3)+parseInt(q4)+parseInt(q5);
      $("#result").text("YOU SCORED: " +result + "%");

      $("button").click(function() {
          $("#result-showing").toggle();
          $("#quiz-hidden").toggle();
      });
      $("form#quiz").hide();
      $("#result").show();
      event.preventDefault();
      });



$('#showanswer').click(function(){
     $('.Question, p').show();
     $('#showanswer').hide();

     $('#hideanswer').show();
  });

  $('#hideanswer').click(function(){

     $('.answer',).hide();
     $('#showanswer').show();
     $('#hideanswer').hide();
  });
  });
