let valeur = 0;

        function incrementer() {
            valeur++;
            document.getElementById("valeur").textContent = valeur;
        }

        function decrementer() {
            valeur--;
            document.getElementById("valeur").textContent = valeur;
        }