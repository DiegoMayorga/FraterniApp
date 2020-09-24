<?php 
    session_start();
    if(isset($_SESSION['user_id'])){
        header ('Location: /Login_v0.5');
    }
    require 'DateBase.php';
    $message = '';
    if(!empty($_POST['email'])&&!empty($_POST['password'])){
        $records = $conn -> prepare('SELECT usuarioId,usuarioNombre,usuarioEmail,usuarioTelefonoPrincipal,usuarioContraseña,fk_universidadId FROM usuario WHERE usuarioEmail=:email');
        $records->bindParam(':email', $_POST['email']);
        $records->execute();
        $results=$records->fetchAll(\PDO::FETCH_ASSOC);
        $filas=count($results);
        if($filas > 0 && password_verify($_POST['password'], $results[0]['usuarioContraseña'])){
            $_SESSION['user_id'] = $results[0]['usuarioId'];
            header ('Location: /Login_v0.5');
        }else{
            $message ='Contraseña o email incorrecto';
        }
    }
?>

<!DOCTYPE html>
<html lang="sp">
    <head>
        <meta charset="UTF-8">
        <title>Ingresar</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assests\css\style.css"> 
    </head>
    <body>
        <?php require 'partials/header.php'?>
        <?php if(!empty($message)): ?>
            <p><?= $message ?></p>
        <?php endif; ?>
        <h1>Ingreso</h1>        
        <span> o <a href="signup.php"> Registrate </a></spam>
        <form action = "login.php" method = "post">
            <input class="input-login" type = "email" name = "email" placeholder = "ejemplo@ejemplo.com">
            <input class="input-login" type = "password" name = "password" placeholder = "Contraseña">
            <input class="input-pass" type = "submit" value = "Enviar">
        </form>
        <a href="recovery.php"> Olvidé mi conseña </a>
    </body>
</html>