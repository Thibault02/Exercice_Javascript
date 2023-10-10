function verifierAge(event) {
    event.preventDefault();
    var age = parseInt(event.target.age.value);

    if (isNaN(age)) {
        alert("Veuillez entrer un âge valide !");
        return;
    }

    if (age >= 18) {
        alert("Vous êtes majeur.");
    } else {
        alert("Vous êtes mineur.");
    }
}