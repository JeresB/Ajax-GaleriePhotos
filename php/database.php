<?php
require_once('constants.php');

function dbConnect() {
  try {
    $pdo = new PDO("mysql:host=".DB_SERVER.";port=3306;dbname=".DB_NAME.";charset=utf8", DB_USER, DB_PASSWORD);
  } catch (PDOException $e) {
    error_log('Connexion échouée : '.$e->getMessage());
    return false;
  }
  return $pdo;
}


function dbRequestPolls($db, $id = -1, $login = '') {
  try {
    $request = "SELECT * FROM polls ";

    if ($id != -1) $request .= "WHERE id = :id ";
    if ($login != '') $request .= "WHERE login = :login";

    $query = $db->prepare($request);

    if ($id != -1) $query->bindParam(":id", $id, PDO::PARAM_INT);
    if ($login != '') $query->bindParam(":login", $login, PDO::PARAM_STR, 20);

    $query->execute();
    $row = $query->fetchAll(PDO::FETCH_ASSOC);

  } catch (PDOException $e) {
    error_log('Requête échouée : '.$e->getMessage());
    return false;
  }

  return $row;
}

function dbReplyPoll($db, $id, $choice) {
  $request = 'update polls set option'.$choice.'score=option'.$choice.'score + 1,
              participants=participants + 1 where id=:id';

  $query = $db->prepare($request);
  $query->bindParam(":id", $id, PDO::PARAM_INT);
  $query->execute();

  return true;
}

function dbAddPoll($db, $login, $title, $option1, $option2, $option3) {
  $request = 'insert into polls(login, title, option1, option1score, option2,
              option2score, option3, option3score, participants)
              values(:login, :title, :option1, 0, :option2, 0, :option3, 0, 0)';

  $query = $db->prepare($request);
  $query->bindParam(":login", $login);
  $query->bindParam(":title", $title);
  $query->bindParam(":option1", $option1);
  $query->bindParam(":option2", $option2);
  $query->bindParam(":option3", $option3);
  $query->execute();

  return true;
}

//$db = dbConnect();
//var_dump(dbRequestPolls($db));
