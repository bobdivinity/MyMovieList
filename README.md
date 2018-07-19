# MyMovieList

NB: Pour toutes ses actions, on partira du principe que nous sommes dans le répertoire courant du projet.



## Partie React

### Installation des dépendances
```
npm install
```

### Lancement du serveur de développement
```
npm run dev
```

### Compilation du mode production
```
npm run build
```

### Execution des tests
```
npm run test
```



## Partie Serveur (DEV uniquement)

### Créer l'image docker
```
cd data/docker
docker build -t httpd-rewrite .
```

### Instancier le container docker

#### Sur Windows
**Attention :** Pour que Docker puisse réaliser correctement le montage de répertoire, il faut au préalable donner l'autorisation à Docker Engine d'accéder au disque sur lequel se trouve les sources du projet.

Pour cela, faire : `clic droit sur Docker > Settings > Shared Drives` et cocher le disque souhaité puis `Apply`

**NB : Docker vous demandera le mot de passe de la session Windows actuelle. S'il n'y en a pas, il faut modifier sa session pour en apposer un sinon il ne laissera pas passer cette étape et le partage ne fonctionnera pas.**

Puis, dans un termine, lancer la commande suivante :
```
docker run -d --name myMovieList-server -v "%CD%"/data/api:/var/www/html -p 8000:80 httpd-rewrite
```

#### Sur Linux
@TODO

### Modifier la configuration pour taper sur le serveur local
Maintenant que le serveur local à été monté, il faut modifier le fichier `src/config.js` et modifier la valeur suivante :
```
API_TMDB_URL: 'http://localhost:8000',
```

### Tests
Aller sur `http://localhost:8000` et constater que le message `It works !` est affiché
