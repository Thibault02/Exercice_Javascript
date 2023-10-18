// Lorsque le bouton avec l'ID "btnHide" est cliqué
$("#btnHide").click(function() {
    // Cache tous les éléments <p> (paragraphe) de la page
    $("p").hide();
});

// Lorsque le bouton avec l'ID "btnShow" est cliqué
$("#btnShow").click(function() {
    // Affiche tous les éléments <p> (paragraphe) de la page
    $("p").show();
});
