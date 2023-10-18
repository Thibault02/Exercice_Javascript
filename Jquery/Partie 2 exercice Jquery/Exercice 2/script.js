// Créer un écouteur d’événement pour l'image
$("#image").hover(function() {
    $(this).css("width", "100px");  // exemple de nouvelle taille
}, function() {
    $(this).css("width", "originalSize");  // remettre à la taille originale
});
