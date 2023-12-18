# Florence-Demeusy-Photographe
travail à faire:
   dans .articleStory, les 3 points de suspensions n'apparaissent pas quand le texte déborde du paragraphe, et selon la hauteur du paragraphe, la dernière ligne est coupée verticalement...

correctifs à voir avec Flo:
   tous les liens qui renvoient vers une autre page s'ouvrent dans un nouvel onglet. c'est ok ?
   il faudrait choisir une autre molice d'écriture pour $secondPolice
   .publiLireTout
      les 2 liens renvoient à la même adresse
   dans .works
      je pense qu'il serait mieux d'afficher la photo en entier (dans une modale) lors du clic
      et retirer le lien sur la titre, il fait doublon avec le "Lire la suite"
      j'ai corrigé l'affichage en hauteur pour le couple halloween
      correctifs d'orthographe:
         j'ai mis des majuscules au début des phrases qui n'en avaient pas
         Merci "à" Mélodie et Steve
         m’autoriser "à" publier
         La spooky season étant terminé"," j’ai déjà
         les témoignages que j’ai obtenu""s,

Messages pour Flo:
modèle à copier/coller pour ajouter un projet:
let nouveauProjet = {
   id: "ça tu le laisse, c'est le code qui le gère",
   nomProjet: "le nom que tu veux donner à ton projet",
   img: "nom du fichier photo, sans oublier l'extention de fichier",
   ajust: `ajuste le positionnment de l'image dans le cadre.`,
   alt: `un message pour aider les mal-voyants à savoir ce que représente la photo`,
   figcaption: `le nom que tu veux donner à la photo`,
   p: `le paragraphe de texte`,
   a: "le lien cliquable présent sur la photo et sur le Lire la suite"
};

Pour ajouter un nouveau projet à la liste des publications:
   1: copier le norceau de code et le coller dans la partie "tous les projets".
   2: modifier le norceau de code que tu as collé pour personaliser les champs. 
      2.a: remplacer "nouveauProjet" par le nom que tu veux donner à ce projet. ex: witchyWeen ou coupleHalloween.
         Ca doit être le même nom que celui que tu donnera au champ "nomProjet" et au dossier qui contiandra les photos du projet.
         restrictions de nom:
            - un seul mot tout attaché.
            - le nom commence par une minuscule.
            - pas d'accents ni caractères spéciaux.
      2.b: remplacer le contenus des champs en gardant les guillemets.
   3: ajouter le nom du projet à "liste des projets affichés" à l'emplacement où tu veux.
      L'affichage des projets se fait dans l'ordre de la liste.
   4: tester le rendu en local.
   5: mettre à jour le fichier coté hébergeur.

Pour ajouter des photos au projets:
   Pour un nouveau projet, tu crée un nouveau dossier dans assets/images que tu nomme de la même façon que dans le morceau de code à copier/coller.
   Tu ajoute la photo que tu veux dans le dossier assets/images/works/nomDuProjet.
   Attention à bien définir le nom des projets et des photos pour qu'ils soient courts et compréhensibles.
   Les noms commencent par une minuscule et ne comportent pas de caractères spéciaux (exerption pour les photos si tu veux mettre un -).

Pour ajuster la photo par rapport au cadre avec "ajust":
   Si tu laisse le champ vide, la photo sera automatiquement centrée sur sa largeur et sur sa hauteur.
   Si tu veux ajuster l'image (comme pour "Couple Halloween !" par ex) tu écris 2 valeurs en %.
      La première valeur va modifier l'allignement en largeur: 0% aligne la photo tout à gauche, 100% le fait tout à droite.
      La deuxième valeur va modifier l'allignement en hauteur: 0% aligne la photo tout en haut, 100% le fait tout en bas.
      Laisser le champ vide équivaut à écrire: 50% 50%
   Pour "Couple Halloween !", pour compenser le passage du mode "portait" au mode "paysage", on va devoir abaisser le cadrage.
      Les personnes sont déjà bien centrées en largeur, donc on ne le modifie pas (on laisse à 50%), mais on abaisse le cadrage de 90%.
         Ce qui donne: ajust: `50% 90%`,

Pour retirer un projet de l'affichage du site sans le supprimer:
   Tu supprime simplement son nom de la liste dans "liste des projets affichés". Si tu veux le remettre plus tard, il suffira de reécrire son nom dans la liste.

Pour supprimer totalement un projet:
   Tu le retire de la liste dans "liste des projets affichés", et tu supprime son bloc de code dans "tous les projets"

Pour modifier l'ordre d'affichage des projets sur la page:
   Les projets s'affichent sur la page dans l'ordre où ils apparaissent dans "liste des projets affichés". Si tu modifie l'ordre de la liste ça modifie l'affichage.

Pour tester le rendu du site après avoir fait des modifications:
   Dans le dossier qui contient l'ensemble du projet, tu lance le fichier index.html. Ca va ouvrir une version locale du projet dans ton navigateur.
   Ca te donnera un apercu du rendu et ça te permettra de faire des tests avant d'envoyer le projet à l'hébergeur.