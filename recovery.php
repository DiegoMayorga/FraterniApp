<?php
    if (isset($_SESSION['user_id'])) {
        header('Location: /Login_v0.5');
    }
    include("methods.php");
    require 'DateBase.php';
    $message = '';
    if(!empty($_POST['email'])&&!empty($_POST['password'])&&!empty($_POST['Confirm_password'])){
        if($_POST['password']==$_POST['Confirm_password']){
            $records_ = search($_POST['email']);
            $filas=count($records_);
            if($filas != 0){
                $records = $conn -> prepare('UPDATE usuario set usuarioContraseña = :password WHERE usuarioEmail=:email');
                $records->bindParam(':email', $_POST['email']);
                $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
                $records->bindParam(':password', $password);
                if($records->execute()){
                    $message = 'Registro correcto';
                }else{
                    print_r($stmt->errorInfo());
                    $message = 'Hubo un error a la hora de crear el usuario';
                }
            }else{
                $message = 'El correo no está en uso';
            }
        }else{
            $message = 'La contraseña debe ser igual para los dos casos';
        }
    }else{
        $message ='Tiene que llenar todos los campos';
    }

?>

<!DOCTYPE html>
<html lang="sp">
    <head>
        <meta charset="UTF-8">
        <title>Recuperar Contraseña</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assests\css\style.css"> 
    </head>
    <body>
        <?php require 'partials/header.php'?>
        <h1>Recuperar Contraseña</h1>        
        <span><a href="login.php"> Ingresar </a> o <a href="signup.php"> Registrate </a></spam>
        <form action = "recovery.php" method = "post">
            <input class="input-login" type = "email" name = "email" placeholder = "ejemplo@ejemplo.com">
            <input class="input-login" type = "password" name = "password" placeholder = "Nueva contraseña">
            <input class="input-login" type = "password" name = "Confirm_password" placeholder = "Confirmar contraseña">
            <input class="input-pass" type = "submit" value = "Recuperar">
        </form>
        <?php if(!empty($message)): ?>
            <p><?= $message ?></p>
        <?php endif; ?>
    </body>
</html>