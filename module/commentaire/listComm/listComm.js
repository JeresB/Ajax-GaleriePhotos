var cookieId = $.cookie('current-id');

// Si aucune image est affiché en grand
if (typeof cookieId == 'undefined') {
  cookieId = 0;
}

ajaxRequest('GET', 'php/request.php/commentaire/' + cookieId, loadCommentaire);

function loadCommentaire(ajaxResponse) {
  if (ajaxResponse != "") {
    var response = JSON.parse(ajaxResponse);

    var div = document.getElementById('listCommentaire');
    div.innerHTML = '';

    var text = '';

    for (var i = 0; i < response.length; i++) {
      text += '<div class="alert alert-info" role="alert">';
      text += response[i].commentaire;
      text += '</div>';

      console.log(response[i].commentaire);
    }

    div.innerHTML = text;
  }
}
