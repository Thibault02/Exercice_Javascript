// Lorsque l'élément avec l'ID "inputField" reçoit le focus (par exemple, lorsque l'utilisateur clique dessus)
$("#inputField").focus(function() {
    // Modifie la bordure de l'élément pour qu'elle soit verte et ait une largeur de 3px
    // 'this' fait référence à l'élément spécifique qui a reçu le focus (dans ce cas, l'élément avec l'ID "inputField").
    $(this).css("border", "3px solid green");
});

// Lorsque l'élément avec l'ID "inputField" perd le focus (par exemple, lorsque l'utilisateur clique en dehors de l'élément)
$("#inputField").blur(function() {
    // Modifie la bordure de l'élément pour qu'elle soit rouge et ait une largeur de 2px
    // 'this' fait référence à l'élément spécifique qui a perdu le focus (dans ce cas, l'élément avec l'ID "inputField").
    $(this).css("border", "2px solid red");
});
