let user = ["Alice", "Bob", "Charlie", "David", "Eva"];
//user[3] modifie le 4 eme elemenet avec une autre valeur définie
user[3] = "Jean";
//.innerText = user.join(", ") mets le tableau en chaine de caractere
document.getElementById("output3").innerText = user.join(", ");
console.log(user);
