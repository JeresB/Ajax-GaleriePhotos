<?php
	require_once('database.php');
	// We check the request type.
	$request = substr($_SERVER['PATH_INFO'], 1);

	// We check if the request is a module.
	if (is_dir('../'.$request))
	{
		// We extract the module name.
		$moduleName = substr($request, strrpos($request, '/') + 1);

		sendHtmlAndJsData('commentaire', $request, $moduleName);

		sendHtmlAndJsData('galerie', $request, $moduleName);

	}
	else {
		$db = dbConnect();

		if ($db != false) {
			$request_explode = explode('/', $request);
			$requestType = $_SERVER['REQUEST_METHOD'];
			if(array_shift($request_explode) == 'galerie') {
				$data = NULL;

				$id = array_shift($request_explode);

				if ($id != NULL && $id != "" && $requestType == 'GET') {
					$id = intval($id);
					$data = dbRequestPolls($db, $id);
				}
				// } else if ($id != NULL && $id != "" && $requestType == 'PUT') {
				// 	parse_str(file_get_contents('php://input'), $_PUT);
				// 	error_log($_PUT['choice']);
				// 	$data = dbReplyPoll($db, intval($id), $_PUT['choice']);
				//
				// } else if ($id != NULL && $id != "" && $requestType == 'POST') {
				// 	$data = dbAddPoll($db, $_POST['login'], $_POST['title'],
				// 	$_POST['option1'], $_POST['option2'], $_POST['option3']);
				//
				// }

				else if ($requestType == 'GET') {
					$data = dbRequestPolls($db);
				}

				if ($data != NULL)
					sendJsonData($data);
			}
		} else {
			header('HTTP/1.1 503 Service Unavailable');
			exit;
		}

		header('HTTP/1.1 400 Bad request');
		exit;
	}


	//----------------------------------------------------------------------------
	//--- sendHtmlAndJsData ------------------------------------------------------
	//----------------------------------------------------------------------------
	function sendHtmlAndJsData($divId, $modulePath, $moduleName)
	{
	  // We create the data (Html and Js).
	  $data = array ('html' => $modulePath.'/'.$moduleName.'.html',
			'divId' => $divId, 'js' => $modulePath.'/'.$moduleName.'.js');
		sendJsonData($data);
	}

	//----------------------------------------------------------------------------
	//--- sendJsonData -----------------------------------------------------------
	//----------------------------------------------------------------------------
	function sendJsonData($data, $code = 200)
	{
	  // We send the data to the client.
	  header('Content-Type: text/plain; charset=utf-8');
	  header('Cache-control: no-store, no-cache, must-revalidate');
	  header('Pragma: no-cache');
		header('HTTP/1.1 200 OK');
	  echo json_encode($data);
		exit;
	}
?>
