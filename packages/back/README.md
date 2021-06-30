# node-tp

## deploy

- `make build`
- Full production : `make full`

## Dev

- Standalone database in dev :
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d mongo
```
- `yarn dev` (nodemon)

## Dépendances

- Pour créer des controllers, des middlewares et utilisez de l'injection de services, il est utilisé [node-decorators](https://github.com/serhiisol/node-decorators)

- Pour l'auth on utilise `oidc` qui est une norme d'authentificaition (openid) basé sur oauth2.
Le code se trouve [ici](src/modules/oauth). Nous l'utilisons directement sur notre serveur  grâce au middleware de la librairie [node-oidc-provider](https://github.com/panva/node-oidc-provider) et un client de connection via passport [openid-client](http://www.passportjs.org/packages/openid-client/)

- Un module `mongo` utile pour créer facilement des crud sur des models particuliers. [ici](src/modules/mongodb/)

- Le module framework apporte des utilitaires pour aider dans l'utilisation de **l'injection de dépendance** et le **container** de node-decorators

- La plupart des fonctions sont documentées dans le code
