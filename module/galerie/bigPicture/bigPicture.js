var cookieId = $.cookie('current-id');

ajaxRequest('GET', 'php/request.php/galerie/' + cookieId, loadBigPicture);

function loadBigPicture(ajaxResponse) {
  console.log("chargement big picture");
}
