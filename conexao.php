<?php

$servidor = "localhost";
$utilizador = "root";
$password = "2580";
$baseDados = "devweb_systems";

$conexao = new mysqli(
    $servidor,
    $utilizador,
    $password,
    $baseDados
);

if($conexao->connect_error){
    die("Erro na ligação com a base de dados.");
}

$conexao->set_charset("utf8mb4");

?>