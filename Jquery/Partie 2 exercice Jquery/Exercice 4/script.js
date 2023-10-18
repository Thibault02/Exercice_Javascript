// Ajout d'un écouteur d'événement "click" pour les boutons avec les ID "btnGreen", "btnYellow" et "btnRed"
$("#btnGreen, #btnYellow, #btnRed").click(function() {
    // Récupère la valeur de l'attribut "data-color" du bouton cliqué.
    // 'this' fait référence au bouton spécifique qui a été cliqué.
    const color = $(this).data("color");
    
    // Change la couleur du texte de tous les éléments <h1> à la couleur récupérée du bouton cliqué.
    $("h1").css("color", color);
});
