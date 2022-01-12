# Curriculum Vitae avec Next.js

## A propos

Ce dépôt permet de construire rapidement son Curriculum Vitae avec Next.js.
Il à uniquement besoin d'un fichier contenant les données que vous souhaitez affichées.

Besoin d'un aperçu ? Suivez [ce lien](https://my-resume-with-next-js.netlify.app/).

## Récupérer les sources

Pour cloner le dépôt téléchargez le [fichier .zip](https://github.com/jeremy-deurvillier/my-resume-with-next-js/archive/refs/heads/master.zip) 
ou utilisez votre terminal :

`git clone https://github.com/jeremy-deurvillier/my-resume-with-next-js.git`

## Installer les dépendances

Commencez par installer les dépendances :

`npm install`

Vous pouvez ensuite lancer le serveur :

`npm run dev`

## Modifier les données affichées

### Données textuelles

Par défaut, les données affichées sont issues du fichier datas/mydata-example.json.
Modifiez les informations du fichier pour voir vos propres données.

Vous pouvez aussi importer vos données individuellement dans le fichier datas/input.js.

### Image de profil

Pour utiliser votre photo de profil, importer la dans le fichier input.js (à la ligne 4 du fichier).

`import photo from 'chemin/de/votre/photo.jpg'`
