ajaxRequest('GET', 'php/request.php/galerie/', loadGalerie);

function loadGalerie(ajaxResponse) {
  var response = JSON.parse(ajaxResponse);

  var galerie = document.getElementById('galerie');
  galerie.innerHTML = '';

  var text = '';
  for (var i = 0; i < response.length; i++) {
    text += '<div class = "col-lg-3 col-md-6 col-xs-12">';
    text += '<a href="#" id = "';
    text += response[i].id;
    text += '" class="thumbnail">';
    text += '<img src = "';
    text += response[i].url;
    text += '"></a></div>';

    galerie.innerHTML = text;
    $('#' + response[i].id).unbind('click').click(function(event) {
        event.preventDefault();
        console.log("j'ai cliqué");
        openBigPicture(event.target.id);
      });
  }


  console.log(response);
}

function openBigPicture(pictureID) {
  $.cookie('current-id', pictureID);
  ajaxRequest('GET', 'php/request.php/module/galerie/bigPicture', loadHtmlAndJs);
}
