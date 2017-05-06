var cookieId = $.cookie('current-id');

ajaxRequest('GET', 'php/request.php/polls/' + cookieId, loadReplyPoll);

function loadReplyPoll(ajaxResponse) {
  var response = JSON.parse(ajaxResponse);

  var title = document.getElementById('title');
  title.innerHTML = '';

  var option1 = document.getElementById('option1');
  option1.innerHTML = '';

  var option2 = document.getElementById('option2');
  option1.innerHTML = '';

  var option3 = document.getElementById('option3');
  option1.innerHTML = '';

  for (var i = 0; i < response.length; i++) {
    title.innerHTML = response[i].title;

    var textOption1;
    textOption1 = "<button type = 'button' class = 'btn'>";
    textOption1 += response[i].option1;
    textOption1 + "</button>";

    option1.innerHTML = textOption1;

    var textOption2;
    textOption2 = "<button type = 'button' class = 'btn'>";
    textOption2 += response[i].option2;
    textOption2 + "</button>";

    option2.innerHTML = textOption2;

    var textOption3;
    textOption3 = "<button type = 'button' class = 'btn'>";
    textOption3 += response[i].option3;
    textOption3 + "</button>";

    option3.innerHTML = textOption3;

    $( "#option1").click(function() {
      console.log('bouton1');
      ajaxRequest('PUT', 'php/request.php/polls/' + cookieId, displayPolls, 'choice=1');
    });

    $( "#option2").click(function() {
      console.log('bouton2');
      ajaxRequest('PUT', 'php/request.php/polls/' + cookieId, displayPolls, 'choice=2');
    });

    $( "#option3").click(function() {
      console.log('bouton3');
      ajaxRequest('PUT', 'php/request.php/polls/' + cookieId, displayPolls, 'choice=3');
    });

  }
}

function displayPolls() {
  $.cookie('reply-' + $.cookie('current-id'), '1', {expires: 365});
  ajaxRequest('GET', 'php/request.php/module/polls/list', loadHtmlAndJs);
}
