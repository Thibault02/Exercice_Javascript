//instance de l'objet personnage
let personnage = {
    name :'Thibault',
    age :'24',
    rang:'chomeur',
    crie:'OOOHHHHHH'
}
//permet de transformer l'objet en objet json
let jsonString = JSON.stringify(personnage);
console.log(personnage);