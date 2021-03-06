'use strict';

$.cookie('current-id', 0);

// Requete pour le module galerie --- Affiche toutes les images petit format
ajaxRequest('GET', 'php/request.php/module/galerie/listGalerie', loadHtmlAndJs);

// Requete pour le module commentaire
// Affiche la barre d'envoie de commentaire avec le bouton envoyer
ajaxRequest('GET', 'php/request.php/module/commentaire/send', loadHtmlAndJs);

// Requete pour afficher la liste des commentaires par rapport aux images
ajaxRequest('GET', 'php/request.php/module/commentaire/listComm', loadHtmlAndJs);
