# Explication du projet

Pendant ces 2 jours nous allons créer une application qui va permettre de
pouvoir prendre des jours dans le lab,

Les fonctionalités de bases seront les suivantes :

- Une authentification grace à LV connect
- Un CRUD pour affecter des jours à une personne

NodeJS est fait pour avoir un développement d'application modulaire, ou en
package, pour se faire et s'obliger à respecter ce pattern, nous allons
travailler avec les `workspaces` de `yarn`

## Pour se faire nous allons devoir faire un petit peu de config pour notre environement

- Installer `yarn`
- Configurer `yarn` pour que l'on puisse utiliser des `workspaces` qui se
  situeront dans un dossier `**/packages`
- dans le dossier `packages`
  - Créer un package ayant pour nom `@lab/api` dans un dossier `api`
    - faite "pointer" le package vers un fichier `src/index.js` qui fera un
      `console.log("hello from api")`
  - Créer un package ayant pour nom `@lab/app` dans un dossier `app`
    - faite "pointer" le package vers un fichier `src/index.js` qui fera un
      `console.log("hello from app")`
- Ajouter un "script" nommé "start:api" dans le `package.json` root, afin de
  pouvoir executer `@lab/api`
- Ajouter un "script" nommé "start:app" dans le `package.json` root, afin de
  pouvoir executer `@lab/app`

## passer à l'étape suivante

`yarn next-step`
