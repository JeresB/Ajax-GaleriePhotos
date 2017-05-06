var login = $.cookie('login');
$( "#add-poll-bouton").click(addPoll(event));

function addPoll(event) {
  var title = $("#title").val();
  var option1 = $("#option1").val();
  var option2 = $("#option2").val();
  var option3 = $("#option3").val();

  ajaxRequest('POST', 'php/request.php/polls/', displayPolls,
   'login=' + login + '&title=' + title + '&option1=' + option1 + '&option2=' + option2 + '&option3='+ option3);
}

function displayPolls() {
  ajaxRequest('GET', 'php/request.php/module/polls/list', loadHtmlAndJs);
}
