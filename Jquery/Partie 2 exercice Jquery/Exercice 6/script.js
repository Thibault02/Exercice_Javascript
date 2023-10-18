// Initialisation d'une variable "counter" avec la valeur 0.
let counter = 0;

// Lorsque le bouton avec l'ID "btnIncrement" est cliqué
$("#btnIncrement").click(function() {
    // Augmente la valeur de "counter" de 1
    counter++;
    
    // Ajoute un nouveau paragraphe à l'élément avec l'ID "divCounter" et affiche la valeur actuelle de "counter" dans ce paragraphe
    $("#divCounter").append("<p>" + counter + "</p>");
});

// Lorsque le bouton avec l'ID "btnDecrement" est cliqué
$("#btnDecrement").click(function() {
    // Vérifie si la valeur de "counter" est supérieure à 0
    if (counter > 0) {
        // Diminue la valeur de "counter" de 1
        counter--;
        
        // Supprime le dernier paragraphe ajouté à l'élément avec l'ID "divCounter"
        $("#divCounter p:last").remove();
    }
});
