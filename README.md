1-  Installation de Cypress:
    - executez la commande: npm install cypress --save-dev
    - Le projet est pour le moment vide, passez à l'étape suivante pour la création de l'arborescence cypress.
    - ouvrir cypress sur un navigateur: npx cypress open
    - lancer les tests: npx cypress run

2- Création des tests
    - Dans le répertoire e2e, créez un fichier qui aura pour extension *.cy.js
    - ajoutez en première ligne l'instruction: /// <reference types="cypress" />, celle-ci vous permettera d'avoir l'autocompletion.
    - Créez votre premier test de connexion sur orangehrm
    - executez votre test avec la commande npx cypress run.