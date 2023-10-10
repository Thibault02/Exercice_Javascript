<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form id="passwordForm" onsubmit="return passwordCheck();">
        <input type="password" id="password" placeholder="Mot de passe">
        <input type="password" id="confirmPassword" placeholder="Confirmer le mot de passe">
        <input type="submit" value="Vérifier">
    </form>
    <p id="message"></p>
    <script src="script.js"></script>
</body>
</html>