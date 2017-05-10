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

function dbRequestGalerie($db, $id = -1) {
  try {
    $request = "SELECT * FROM photos ";

    if ($id != -1) $request .= "WHERE id = :id ";

    $query = $db->prepare($request);

    if ($id != -1) $query->bindParam(":id", $id, PDO::PARAM_INT);

    $query->execute();
    $row = $query->fetchAll(PDO::FETCH_ASSOC);

  } catch (PDOException $e) {
    error_log('Requête échouée : '.$e->getMessage());
    return false;
  }

  return $row;
}

function dbAddCommentaire($db, $commentaire) {
  try {
    $requete = "INSERT INTO commentaire (id, commentaire) VALUES (NULL, :commentaire)";
    $query = $db->prepare($requete);
    $query->bindParam(":commentaire", $commentaire, PDO::PARAM_STR, 255);
    $query->execute();

  } catch (PDOException $e) {
    error_log('Ajout de commentaire échouée : '.$e->getMessage());
    return false;
  }

  return true;
}

//$db = dbConnect();
