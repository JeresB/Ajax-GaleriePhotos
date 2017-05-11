// Si on clique sur le bouton envoyer
$('#commentaire-send').click(function() {
  // On stock le commentaire dans une variable
  var commentaire = $("#commentaire-message").val();

  // On récupère l'id de l'image actuelle
  var cookieId = $.cookie('current-id');

  // Si aucun image est affiché en grand
  if (typeof cookieId == 'undefined') {
    cookieId = 0;
  }

  // On effectue la requete Ajax avec l'id_image et le commentaire en data
  ajaxRequest('POST', 'php/request.php/commentaire', displayCommentaire, 'commentaire=' + commentaire + "&id_image=" + cookieId);

  // On réinitialise l'input commentaire pour pouvoir réécrire d'autre commentaire
  $("#commentaire-message").val('');
});

function displayCommentaire() {
  // Afficher la liste de commentaire apres en avoir rajouté un !!!
  console.log("displayCommentaire");
}
