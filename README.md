# Projet SQL B2

Ce repository a pour but de vous permettre de tester vos requêtes SQL pour le projet.
Il peut aussi servir de rendu pour cela vous devrez changer l'url du repo en suivant ce [tuto](https://devconnected.com/how-to-change-git-remote-origin/) pour le lier avec votre repo de rendu.

⚠️ Si vous ne le faites pas vous ne pourrez pas push sur notre repo, cela tentera de push sur mon rep et donc ne marchera pas.

## Installation

Tout d'abord vous devez installer les packages :

```bash
npm install
```

## Utilisation

Lorsque vous pensez avoir une requête répondant à la consigne, vous pouvez tester votre réponse en remplissant le fichier `.js` se trouvant dans le dossier `student_answer` correspondant à la question, (ex: question 1 -> `q1.js`)

Lorsque vous avez rempli la variable du fichier avec votre requête vous pouvez la tester en faisant :

```bash
npm test q1.test.js
```

Cette commande lancera le test pour le fichier `q1.js` correspondant au test de la première question.

⚠️ Si vous ne spécifiez pas le fichier comme dans l'exemple dans la commande de test, cela lancera absolument tous les tests.
