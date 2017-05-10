

// Si on clique sur le bouton envoyer
$('#commentaire-send').click(function() {
  // On stock le commentaire dans une variable
  var commentaire = $("#commentaire-message").val();

  // On effectue la requete Ajax avec le commentaire en data
  ajaxRequest('POST', 'php/request.php/commentaire', displayCommentaire, 'commentaire=' + commentaire);

  // On réinitialise l'input commentaire pour pouvoir réécrire d'autre commentaire
  $("#commentaire-message").val('');
});

function displayCommentaire() {
  // Afficher la liste de commentaire apres en avoir rajouté un !!!
  console.log("displayCommentaire");
}
