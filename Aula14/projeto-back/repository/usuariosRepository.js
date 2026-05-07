const usuariosDAO = require("../dao/usuariosDAO");

const listar = async () => {
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: white;
            padding: 30px;
            width: 350px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        input[type="text"] {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-bottom: 15px;
            outline: none;
            transition: 0.3s;
        }

        input[type="text"]:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 5px rgba(79, 70, 229, 0.4);
        }

        input[type="submit"] {
            background: #4f46e5;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }

        input[type="submit"]:hover {
            background: #4338ca;
        }

        p {
            margin-top: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Cadastro</h2>

        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John">

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe">

            <input type="submit" value="Enviar">
        </form>

        <p>Os dados serão enviados para o servidor.</p>
    </div>

</body>
</html><!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: white;
            padding: 30px;
            width: 350px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        input[type="text"] {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-bottom: 15px;
            outline: none;
            transition: 0.3s;
        }

        input[type="text"]:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 5px rgba(79, 70, 229, 0.4);
        }

        input[type="submit"] {
            background: #4f46e5;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }

        input[type="submit"]:hover {
            background: #4338ca;
        }

        p {
            margin-top: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Cadastro</h2>

        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John">

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe">

            <input type="submit" value="Enviar">
        </form>

        <p>Os dados serão enviados para o servidor.</p>
    </div>

</body>
</html>    const usuarios = await usuariosDAO.listarUsuarios();
    return usuarios.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
    }));

};

module.exports = {
    listar
};