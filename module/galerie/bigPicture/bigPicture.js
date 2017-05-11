var cookieId = $.cookie('current-id');
console.log("Dans bigPicture : " + cookieId);

ajaxRequest('GET', 'php/request.php/galerie/' + cookieId, loadBigPicture);

function loadBigPicture(ajaxResponse) {
  var response = JSON.parse(ajaxResponse);

  var title = document.getElementById('title');
  title.innerHTML = response[0].title;

  var picture = document.getElementById('picture');
  picture.setAttribute("src", response[0].url);
}
