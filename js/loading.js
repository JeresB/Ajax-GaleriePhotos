'use strict';

// Requete pour le module galerie --- Affiche toutes les images petit format
ajaxRequest('GET', 'php/request.php/module/galerie/list', loadHtmlAndJs);

// Requete pour le module commentaire
// Affiche la barre d'envoie de commentaire avec le bouton envoyer
ajaxRequest('GET', 'php/request.php/module/commentaire/send', loadHtmlAndJs);
