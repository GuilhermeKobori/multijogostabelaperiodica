$(document).ready(function(){

  $("#roll-dice").click(function(){
    var MAXROLL = 10;
    var result = Math.floor(MAXROLL * Math.random()) + 1;
    $("#dice-result").replaceWith("<span id=\"dice-result\" class=\"dice-result\">" + result + "</span>");
  });

  $("#select-element").click(function(){
    var jsonObj;
    var elementNumber = prompt("Selecione o elemento", "Número atômico");

    $.getJSON('../data/' + elementNumber + '.json', function(jsonObj) {
      alert("Selecionado o elemento " + elementNumber);

      $("#tips-table").replaceWith("\
        <table id=\"tips-table\">\
          <tr>\
            <td><button id=\"toggle-tip-1\" class=\"w3-btn\">1</button></td>\
            <td id=\"tip-1\" class=\"invisible\">" + jsonObj.tips[0] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-2\" class=\"w3-btn\">2</button></td>\
            <td id=\"tip-2\" class=\"invisible\">" + jsonObj.tips[1] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-3\" class=\"w3-btn\">3</button></td>\
            <td id=\"tip-3\" class=\"invisible\">" + jsonObj.tips[2] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-4\" class=\"w3-btn\">4</button></td>\
            <td id=\"tip-4\" class=\"invisible\">" + jsonObj.tips[3] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-5\" class=\"w3-btn\">5</button></td>\
            <td id=\"tip-5\" class=\"invisible\">" + jsonObj.tips[4] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-6\" class=\"w3-btn\">6</button></td>\
            <td id=\"tip-6\" class=\"invisible\">" + jsonObj.tips[5] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-7\" class=\"w3-btn\">7</button></td>\
            <td id=\"tip-7\" class=\"invisible\">" + jsonObj.tips[6] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-8\" class=\"w3-btn\">8</button></td>\
            <td id=\"tip-8\" class=\"invisible\">" + jsonObj.tips[7] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-9\" class=\"w3-btn\">9</button></td>\
            <td id=\"tip-9\" class=\"invisible\">" + jsonObj.tips[8] + "</td>\
          </tr>\
          <tr>\
            <td><button id=\"toggle-tip-10\" class=\"w3-btn\">10</button></td>\
            <td id=\"tip-10\" class=\"invisible\">" + jsonObj.tips[9] + "</td>\
          </tr>\
        </table>\
      ");
    });

  });

  $(document).on('click', '#toggle-tip-1', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-1").addClass("w3-red");
    if($("#tip-1").css('visibility') == 'hidden') $("#tip-1").css('visibility', 'visible');
    else $("#tip-1").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-2', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-2").addClass("w3-red");
    if($("#tip-2").css('visibility') == 'hidden') $("#tip-2").css('visibility', 'visible');
    else $("#tip-2").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-3', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-3").addClass("w3-red");
    if($("#tip-3").css('visibility') == 'hidden') $("#tip-3").css('visibility', 'visible');
    else $("#tip-3").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-4', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-4").addClass("w3-red");
    if($("#tip-4").css('visibility') == 'hidden') $("#tip-4").css('visibility', 'visible');
    else $("#tip-4").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-5', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-5").addClass("w3-red");
    if($("#tip-5").css('visibility') == 'hidden') $("#tip-5").css('visibility', 'visible');
    else $("#tip-5").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-6', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-6").addClass("w3-red");
    if($("#tip-6").css('visibility') == 'hidden') $("#tip-6").css('visibility', 'visible');
    else $("#tip-6").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-7', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-7").addClass("w3-red");
    if($("#tip-7").css('visibility') == 'hidden') $("#tip-7").css('visibility', 'visible');
    else $("#tip-7").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-8', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-8").addClass("w3-red");
    if($("#tip-8").css('visibility') == 'hidden') $("#tip-8").css('visibility', 'visible');
    else $("#tip-8").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-9', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-9").addClass("w3-red");
    if($("#tip-9").css('visibility') == 'hidden') $("#tip-9").css('visibility', 'visible');
    else $("#tip-9").css('visibility', 'hidden');
  });

  $(document).on('click', '#toggle-tip-10', function(){
    //Mark the tips that have already been shown
    $("#toggle-tip-10").addClass("w3-red");
    if($("#tip-10").css('visibility') == 'hidden') $("#tip-10").css('visibility', 'visible');
    else $("#tip-10").css('visibility', 'hidden');
  });


});
