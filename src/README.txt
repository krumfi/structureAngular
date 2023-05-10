ng new [project-name]

//suppression du code de base généré par angular

//Ajoute les environnements de prod et developpement 
//Modifie angular.json pour utiliser le bon environnement selon le build sans avoir à importer les 2 fichiers
ng g environments 
//ajout variable dans les 2 fichiers et modification main.ts

//Contient tous les éléments natif typescript (models / interfaces) ET 
//Les composants de page à la racine (app composant (composant qui est bootstrappé dans main.ts))
créer dossier core/app et déplacer le composant app dedans (ts/html/css/spec.ts)
créer dossier core/interfaces
créer dossier core/models

//Contient tous les éléments Angular qui doivent être déclaré dans les modules
//Il est souaitable de déporter ce code du module racide a des fins de lisibilité
créer dossier shared
créer dossier shared/components
créer dossier shared/directives
créer dossier shared/guards
créer dossier shared/interceptors
créer dossier shared/pipes
créer dossier shared/services
créer dossier shared/validators

//Créer un module pour tous les éléments à partager dans toute l'application
//Importe le module dans le app.module.ts (module racine)
ng g m shared --module app

//Tous les composants / directives / pipes devront etre dans le tableau "export"
//Tous les autres devront être dans le tableau "providers" (non créer par défaut, exemple dans le module racine)
ng g c shared/components/pageNotFound --export

//Tous le reste du code sera dans les micro-applications et ressemblerons à celui-ci
ng g m aspic --routing //edition des routes
ng g c aspic/home
ng g c aspic/toto
ng g c aspic/layout //edition du .html

//edition des routes app-routing.module.ts

ng serve --open

/******************************/
Si tu as tout compris, décommente la ligne 6 de app-routing.module.ts
/******************************/


Il va de soi que le dossier aspic possedera une multitude d'autres modules (chargé en lazy) vu la taille du bordel !
Du coup, il se peut que tu ais a créer des services et autres, spécific à aspic:
Dans ce cas tu peux créer un dossier "shared" dans aspic qui aura le même principe que celui que j'ai créé à la racine


/************ autre fonctionnalité qui pourrait t'interesser ************/
Proxying to different backend url: https://angular.io/guide/build#proxying-to-a-backend-server