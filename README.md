# Catalogue de Jeux Vidéo 

# https://saadiaajbbar.github.io/brief5/tailwindCss/src/index.html

## Contexte du projet

Ce projet a été réalisé dans le cadre de  formation à YouCode, pour apprendre à utiliser une API publique, gérer des données de façon asynchrone avec JavaScript en utilisant tailwind css.  
L’objectif principal est de permettre à l’utilisateur de découvrir des jeux vidéo, et les rechercher, les filtrer, et les ajouter au liste des  favoris.


## Objectifs du projet

- Récupérer des données depuis une api public.
- Afficher une liste de jeux vidéo avec leurs informations (nom, image, note, genre, date…).
- Ajouter une input de recherche et des barre de filtres dynamiques
- Créer une page  de liste des jeux favoris  sauvegardé dans le localStorage grace a un button ajouter au favoris.
- Afficherles details de chaque jeu selectionnee par le button voir plus.
- Utiliser le framework Tailwind CSS pour le design.
- Rendre le site responsive (mobile, tablette, desktop).
- Déployer le site sur GitHub Pages.


## Technologies utilisées
-html
-css et tailwind css
-javascript
-api public
-localstorage
-git et github

##  Fonctionnalités

###  Affichage des jeux
- Les jeux sont chargés depuis une api public avec fetch()
- Affichage du nom,  genre, note, date de sortie et plateforme...
- Message d’erreur si aucun jeu trouvé
- message de loading en cas de chargement de page

### Recherche et filtres
- Recherche par nom de jeu
- Filtres par : Genre, Plateforme (PC, PlayStation, Xbox…), Note (croissant ou decroissant)
- Tout ces filtres ou recherches change le resultats dans la page d'accueil sans recharger la page

### Favoris ️
- page mes favoris pour voir les jeux aimees .
- bouton pour ajouter ou retirer un jeu des favoris.
- Les favoris sont enregistrés dans le localStorage.

### Détails du jeu
- Quand on clique sur button de voir plus dans un jeu selectionee une fiche détaillée s’ouvre (Modal ou page).
- ce modal ou page contient les informations complets de jeux selectionne( titre, description, note, genres, date, éditeur,..).

## Interface et design

- Design créé avec Tailwind CSS.
- Adapté à toutes les tailles d’écran (mobile / tablette / ordinateur).
