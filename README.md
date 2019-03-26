# Step 3

## Prerequis

- avoir docker d'installer
- lancer `docker-compose up`

## Objectif de l'étape

Nous allons dans cette étape ajouter `mongoose` et créer le `model` pour notre

Le document `Day` sera composé dans un premier temps des champs suivant:

- `_id` un `ObjectId` qui est créé automatiquement
- `date` une `Date` required qui a pour default value la date du jour
- `description` un champs de type String
- `labels` un Array de String qui a pour default un array vide

Le document `User` sera composé comme ceci:

- `_id` un `ObjectId` qui est créé automatiquement
- `firstName` String
- `lastName` String
- `days` un `Array` de `Day`

Ces deux Schema seront à mettre dans un dossier `model`

Ensuite nous allons créer un nouveau `workspace` nommé `config` dans lequel nous
allons ajouter les variables pour notre base de donnée à savoir comme uri:
`mongodb://localhost:27017` et la collection. On nommera ce packages
`@lab/config`

Une fois cela fait, ajouter cette dependencies dans `@lab/api` et créer un
fichier qui permettra d'initialiser la connexion à la bdd

On va créer la connexion dans `utils/db.mjs` qui aura pour but d'effectuer la
connexion à la bdd

enfin nous allons pouvoir refacto `api.mjs` afin de le rendre un peu plus
lisible, pour ce faire nous allons créer faire une fonction qui prendre `app` en
paramètre et qui enregistra nos middleware dans `middleware/index.mjs` et la
pareillement pour les routes dans `routes/index.mjs`

## passer à l'étape suivante

`yarn next-step`
