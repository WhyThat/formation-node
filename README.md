# Step 1

Vous devez donc avoir l'arborescence suivante :

```
  [Nom de l'application]
    |-  packages
    |   |-  api
    |   |   |-  src
    |   |   |    |- index.js
    |   |   |-  package.json
    |   |-  app
    |   |   |-  src
    |   |   |    |- index.js
    |   |   |-  package.json
    |-  node_modules
    |-  package.json
    |-  README.md
    |-  yarn.lock
```

## Objectif de l'étape

- Ajouter un script `dev:api` qui permettra d'avoir un watcher (avec `nodemon`)
- Installer `express`
  - Initialiser le server
  - faire une route renvoyant un JSON `{"message": "hello world"}`
  - créer un middleware qui affiche un console.log quand la variable
    d'environnement `DEBUG=true` et qui passe les tests unitaires
    (`yarn test:api`)
  - modifier les tests unitaires, pour que la fonction puisse prendre un logger
    custom

## passer à l'étape suivante

`yarn next-step`
