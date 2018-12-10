$(document).ready(function() {


  $("form.questions").submit(function(event) {
    var quiz1 = $("input:radio[name=one]:checked").val();
    var quiz2 = $("input:radio[name=two]:checked").val();
    var quiz3 = $("input:radio[name=three]:checked").val();
    var quiz4 = $("input:radio[name=four]:checked").val();
    var quiz5 = $("input:radio[name=five]:checked").val();
    var quiz6 = $("input:radio[name=six]:checked").val();
    var result = parseInt(quiz1) + parseInt(quiz2) + parseInt(quiz3) + parseInt(quiz4) + parseInt(quiz5) + parseInt(quiz6);
    $("#result").text("YOUR SCORE IS " + result + " / 100%");

    $("button").click(function() {
      $("#result-showing").toggle();
      $("#quiz-hidden").toggle();
    });
    $("form#quiz").hide();
    $("#result").show();
    event.preventDefault();
  });


  var visibleDiv = 0;
  function showDive(){
    $('.panel:eq('+ visibleDiv +')').show();
  }
  showDiv();

  function showNext(){
    $('.panel').hide();
    if(visibleDiv == $('.panel').length){
      visibleDiv = 0;
    }else {
      visibleDiv ++;
    }
    showDiv;
  }

  $('#showanswer').click(function() {
    $('.Question, p').show();
    $('#showanswer').hide();

    $('#hideanswer').show();
  });

  $('#hideanswer').click(function() {

    $('.answer', ).hide();
    $('#showanswer').show();
    $('#hideanswer').hide();
  });
});
