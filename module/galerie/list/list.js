ajaxRequest('GET', 'php/request.php/galerie/', loadGalerie);

function loadGalerie(ajaxResponse) {
  var response = JSON.parse(ajaxResponse);

  var galerie = document.getElementById('galerie');
  galerie.innerHTML = '';

  var text = '';
  for (var i = 0; i < response.length; i++) {
    text += '<div class = "col-lg-3 col-md-6 col-xs-12">';
    text += '<img src = "';
    text += response[i].url;
    text += '"></div>';
  }

  galerie.innerHTML = text;

  console.log(response);
}
