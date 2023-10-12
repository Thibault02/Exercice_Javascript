// Méthode pour permettre au personnage de crier
let personnage = {
    name :'Thibault',
    age :'24',
    rang:'chomeur',
    crie:'OOOHHHHHH'
}
//creer une function qui ecris un message dans la console a partir de l'objet
personnage.crier = function() {
    console.log(this.crie);
}
personnage.crier();
