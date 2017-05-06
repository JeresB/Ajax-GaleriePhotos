'use strict';

ajaxRequest('GET', 'php/request.php/module/polls/list', loadHtmlAndJs);
$.cookie('login', 'cir2');

ajaxRequest('GET', 'php/request.php/module/chat', loadHtmlAndJs);
