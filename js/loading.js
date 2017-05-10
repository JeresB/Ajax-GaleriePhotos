'use strict';

// Requete pour le module galerie
ajaxRequest('GET', 'php/request.php/module/galerie/list', loadHtmlAndJs);

// Requete pour le module commentaire
ajaxRequest('GET', 'php/request.php/module/commentaire/send', loadHtmlAndJs);
