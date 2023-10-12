let car = {
    make :'toyota',
    model:'Yaris',
    color:'Noir'
}
console.log(car)

// Méthode pour afficher les propriétés de la voiture
car.showCar = function() {
    return `Une belle ${this.make} ${this.model}, de couleur ${this.color}`;
}
console.log(car.showCar());
