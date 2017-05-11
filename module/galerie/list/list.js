ajaxRequest('GET', 'php/request.php/galerie/', loadGalerie);

function loadGalerie(ajaxResponse) {
  var response = JSON.parse(ajaxResponse);

  var galerie = document.getElementById('galerie');
  galerie.innerHTML = '';

  var text = '';
  for (var i = 0; i < response.length; i++) {
    var div;
    var a;
    var image;
    var id = response[i].id;
    var url = response[i].url;

    div = document.createElement('div');
    div.className = 'col-lg-3 col-md-6 col-xs-12';

    a = document.createElement('a');
    a.className = 'thumbnail';
    a.setAttribute("href", "#");
    a.setAttribute("id", "lien--" + id);
    console.log("ID de chaque image pos : " + i + " ID : " + id);

    image = document.createElement('img');
    image.setAttribute("id", "image-" + id);
    image.setAttribute("src", url);


    a.appendChild(image);

    div.appendChild(a);

    galerie.appendChild(div);

    $("#image-" + id || "#lien--" + id).unbind('click').click(function (event) {
      event.preventDefault();
      openBigPicture(event.target.id);
    });
  }

  console.log(response);
}

function openBigPicture(pictureID) {
  var id = pictureID.substr(6);

  $.cookie('current-id', id);

  ajaxRequest('GET', 'php/request.php/module/galerie/bigPicture', loadHtmlAndJs);
}
