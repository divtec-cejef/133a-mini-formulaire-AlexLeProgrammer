/**
 * @author Alex Etienne
 * @since 2022.09.06
 */

"use strict";
/******************************
  CHANGEMENT ARRIERE-PLAN
 *****************************/

// Récupération du <body>
const body = document.querySelector("body");
const listeBg = document.querySelector("#bg");

// Change l'arrière-plan
body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`;
// Ecout l'événement "change" sur la liste déroulante
listeBg.addEventListener("change", () => {
    body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`;
});

/******************************
 ENVOI FORMULAIRE
 *****************************/

// Récupération du formulaire et des champs mot-de-passe
const formulaire = document.querySelector("form");
const txtPassword = document.querySelector("#pwd");
const txtPasswordConfirm = document.querySelector("#confirmPwd");

// Ecouter l'envoi du formulaire (submit)
formulaire.addEventListener("submit", (event) => {
    // Stopper l'envoi ou annuler l'évènement
    event.preventDefault();

    // Si le mot de passe est < 3 caractères
    if (txtPassword.value.length < 3) {
        alert("Le mot de passe doit avoir au minimum 3 caractères !");
        return;
    }

   // Test si mot de passe et confirmation sont différents
   if (txtPassword.value !== txtPasswordConfirm.value) {
       alert("Mots de passes différents ");
       return;
   }
   alert("Compte créer avec succès !");
   formulaire.submit();
});