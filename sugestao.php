<?php

require_once "conexao.php";

if($_SERVER["REQUEST_METHOD"] !== "POST"){
    header("Location: projeto.html");
    exit;
}

$nome = trim($_POST["nome"] ?? "");
$email = trim($_POST["email"] ?? "");
$tipo = trim($_POST["tipo"] ?? "");
$objetivo = trim($_POST["objetivo"] ?? "");
$publico = trim($_POST["publico"] ?? "");
$estilo = trim($_POST["estilo"] ?? "");
$cores = trim($_POST["cores"] ?? "");
$funcionalidades = trim($_POST["funcionalidades"] ?? "");
$observacoes = trim($_POST["observacoes"] ?? "");

if(
    empty($nome) ||
    empty($email) ||
    empty($tipo) ||
    empty($objetivo) ||
    empty($publico) ||
    empty($estilo) ||
    empty($cores) ||
    empty($funcionalidades)
){
    die("Preencha todos os campos obrigatórios.");
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    die("Introduza um email válido.");
}

$sql = "INSERT INTO projetos
        (nome, email, tipo, objetivo, publico, estilo, cores, funcionalidades, observacoes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);

$stmt->bind_param(
    "sssssssss",
    $nome,
    $email,
    $tipo,
    $objetivo,
    $publico,
    $estilo,
    $cores,
    $funcionalidades,
    $observacoes
);

if($stmt->execute()){

    $mensagem = "As suas informações foram guardadas com sucesso.";

}else{

    $mensagem = "Não foi possível guardar as informações.";

}

$stmt->close();
$conexao->close();

?>

<!DOCTYPE html>
<html lang="pt-PT">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Resultado | DevWeb Systems</title>

    <link rel="stylesheet"
          href="estilo/style.css">

</head>

<body>

<header>

    <div class="topbar">

        <a class="brand"
           href="index.html">

            DevWeb <span>Systems</span>

        </a>

        <nav>

            <a href="index.html">
                Início
            </a>

            <a href="sobre.html">
                Sobre
            </a>

            <a href="servicos.html">
                Serviços
            </a>

            <a href="dashboard.html">
                Dashboard
            </a>

            <a href="projeto.html">
                Seu projeto
            </a>

            <a href="contacto.html">
                Contacto
            </a>

        </nav>

    </div>

</header>

<main>

<section class="section-block">

    <div class="project-form-card"
         style="max-width:850px;margin:50px auto;text-align:center;">

        <p class="eyebrow">
            Projeto recebido
        </p>

        <h1>
            Obrigado, <?php echo htmlspecialchars($nome); ?>!
        </h1>

        <p>
            <?php echo htmlspecialchars($mensagem); ?>
        </p>

        <div class="suggestion-preview"
             style="position:static;margin-top:30px;text-align:left;">

            <p class="eyebrow">
                Sugestão inicial
            </p>

            <h2>
                <?php

                if($tipo === "Loja"){
                    echo "Uma loja online moderna";
                }
                elseif($tipo === "Portfolio"){
                    echo "Um portfólio visual";
                }
                elseif($tipo === "Blog"){
                    echo "Um blog organizado";
                }
                elseif($tipo === "Sistema"){
                    echo "Um sistema web personalizado";
                }
                elseif($tipo === "Institucional"){
                    echo "Um site institucional profissional";
                }
                else{
                    echo "Uma solução web personalizada";
                }

                ?>
            </h2>

            <p>
                Com um estilo
                <strong>
                    <?php echo htmlspecialchars($estilo); ?>
                </strong>
                e foco em
                <strong>
                    <?php echo htmlspecialchars($objetivo); ?>
                </strong>.
            </p>

            <p>
                Público principal:
                <strong>
                    <?php echo htmlspecialchars($publico); ?>
                </strong>
            </p>

        </div>

        <div style="margin-top:25px;">

            <a href="index.html"
               class="button">

                Voltar ao início

            </a>

        </div>

    </div>

</section>

</main>

<footer>

    <p>
        &copy; 2026 DevWeb Systems.
        Tecnologia com propósito.
    </p>

</footer>

</body>

</html>