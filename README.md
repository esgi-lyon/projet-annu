# projet-annu

![Build and run tests](https://github.com/esgi-lyon/projet-annu/workflows/Build%20and%20run%20tests/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Projet annuel sciences u : Plateforme de formation

## Ressources

- [MCD](https://excalidraw.com/#room=5dbc1a6afa3847a2d702,gJ_FV9rbrkXtNkonjfPaDA )
- [Maquettes (TODO adobe xd)](https://github.com/esgi-lyon/projet-annu#)
- [Kanban](https://github.com/esgi-lyon/projet-annu/projects/1)
- [Collections postman]()

## Install

- `npm i -g lerna`
- `npm run bootstrap`

## Projets

> Regarder les readme dans les sous projets

1. [Back](packages/back/)

- Typescript (etsc) / Nodejs / Mongodb
- Linter : eslint
- Tests : jest

2. [Front](packages/front/)

- Vuejs 3 (vue-next)
- Linter : eslint
- Tests : jest

### 3. Git

### Git flow

- On `merge squash` toujours une branche de feature dans la develop
- On **rebase** toujours la `develop` dans la `prod` pour release

`my-feature-branch --> beta --> main`

### Infos

Merge vs rebase :

![Rebase vs merge](http://cdn.differencebetween.net/wp-content/uploads/2018/11/Difference-Between-Git-Rebase-and-Merge-.png)

Staging area &rarr; repo local &rarr; remote

![Remote / local](https://support.nesi.org.nz/hc/article_attachments/360004194235/Git_Diagram.svg)

### Commandes

```sh
# Bases
git status # Consulter l'état de la staging area
git diff # Consulter les modifs, ajouter --staged si les fichiers ont étés git add 
git add -A # Ajouter tous les fichiers modifiés et nouveaux dans le prochaint commit
git commit -m "" # Placer tous les fichiers ready (en vert) dans un commit
git remote -v # Voir les remotes distantes liés à notre remote locale
git log -10 # historique des commit (-10 = en voir que 10)

# Utiles...
# Stocker vos modifications courantes avant de mettre à jour la branche
git stash 
# remettre dans la staging area ce que vous avez sauvegarder avec git stash
git stash pop

# Décomposition du checkout d'une version
# et de la mise à jour d'une branche
git fetch origin master
git checkout origin/master
git branch ma-branche
git checkout ma-branche
# Ou sinon tout d'un coup
git fetch origin master:ma-branche && git checkout ma-branche

# Pour mettre à jour :
(être bien checkout sur ma branche)
git fetch origin master
git rebase origin/master
# Equivalent à :
git pull  origin master --rebase

# Si vous travailler sur la même branche que quelqu'un
git pull --rebase # (récupère automatiquement et rebase la branche courrante)

# Quand on veut repartir de la bonne version en écrasant tout :
git fetch --all
git reset --hard origin/master

# Quand on est en conflit, une fois résolu via un IDE :
git add -A
git rebase --continue

# Commandes avancées

# reset seulement le README à la version sur origin/master
git checkout origin/master -- README.md
# Modifier l'historique jusqu'au 2 derniers commits
git rebase -i HEAD~2
# Ajouter un commit à son historique courante
git cherry-pick <hash-commit>

```