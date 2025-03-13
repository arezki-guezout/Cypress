1-  Installation de Cypress:
    - executez la commande: npm install cypress --save-dev
    - Le projet est pour le moment vide, passez à l'étape suivante pour la création de l'arborescence cypress.
    - ouvrir cypress sur un navigateur: npx cypress open
    - lancer les tests: npx cypress run

2- Création des tests:
    - Simple Test:
    - Dans le répertoire e2e, créez un fichier qui aura pour extension *.cy.js
    - ajoutez en première ligne l'instruction: /// <reference types="cypress" />, celle-ci vous permettera d'avoir l'autocompletion.
    - Créez votre premier test de connexion sur orangehrm
    - executez votre test avec la commande npx cypress run.
    - Ajout d'un hook:
    - ajoutez deux contexts (scenario positif et scenario negatif), puis ajouter un hook beforeEach qui se connecte à orangehrm avant chaque test.
    - ré-ecrivez vos tests pour tenir compte de l'interaction avec le clavier (Tab pour passer d'un champ à un autre, et Entrée pour valider le formulaire)

3- Utilisation des Tags:
    - installer la dépendance suivante: npm i -D @cypress/grep
    - Ajouter dans cypress/support/e2e.js:
       const registerCypressGrep = require('@cypress/grep')
       registerCypressGrep()
    - Ajouter dans cypress.config.js:
       {
          e2e: {
            setupNodeEvents(on, config) {
               require('@cypress/grep/src/plugin')(config);
               return config;
            },
          }         
        }
    - Annotez vos tests comme ceci { tags: '@smoke' }
    - lancez vos tests via la commande: npx cypress run --env grepTags=@smoke

    - Cibler des tests par le contenu de leurs titre:
      npx cypress run --env grep=HRM (3 tests lancés)
      npx cypress run --env grep=alpha (2 tests lancés)
      npx cypress run --env grep=beta (1 test lancé)
      npx cypress run --env grep=alpha (2 tests lancés)
      npx cypress run --env grep="alpha;beta" (3 tests lancés ie OU logique, avec guillemets)
      npx cypress run --env grep=gamma (2 tests lancés)

    - Cibler des tests en utilisant des noms de fichiers (specs):
      npx cypress run --spec "cypress/e2e/login.cy.js"