function ajouterSomme(event) {
    event.preventDefault();
    var num1 = parseFloat(event.target.num1.value); // passe la valeurs en float
    var num2 = parseFloat(event.target.num2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("entrez un nombre valide");
        return; 
    }

    var somme = num1 + num2;
    alert(`le resultat est : ${somme}`);
}
