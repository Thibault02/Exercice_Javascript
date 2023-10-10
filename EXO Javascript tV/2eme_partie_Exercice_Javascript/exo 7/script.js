function passwordCheck() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password === confirmPassword) {
        message.textContent = "Les mots de passe correspondent!";
        message.style.color = "green";
        return false;

    } else {
        message.textContent = "Les mots de passe ne correspondent pas!";
        message.style.color = "red";
        return false;

    }}