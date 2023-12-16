/* 
Message pour Flo:
   modèle à copier/coller pour ajouter un projet:
   let nomProjet = {
      id: "ça tu le laisse, c'est le code qui le gère",
      img: "nom du fichier photo, sans oublier l'extention de fichier",
      ajust: `ajuste le positionnment de l'image dans le cadre.`,
      alt: `un message pour aider les mal-voyants à savoir ce que représente la photo`,
      figcaption: `le nom que tu veux donner à la photo`,
      p: `le paragraphe de texte`,
      a: "le lien cliquable présent sur la photo et sur le Lire la suite"
   };

   Pour ajouter un nouveau projet à la liste des publications:
      1: copier le norceau de code en dessous et le coller dans la partie "tous les projets".
      2: modifier le norceau de code que tu as collé pour personaliser les champs. 
         2.a: remplacer nomProjet par le nom que tu veux donner à ce projet. ex: witchyWeen ou coupleHalloween.
            restrictions de nom:
               - un seul mot tout attaché.
               - le nom commence par une minuscule.
               - pas d'accents ni caractères spéciaux.
         2.b: remplacer le contenus des champs en gardant les guillemets.
      3: ajouter le nom du projet à "Liste des projets" à l'emplacement où tu veux.
         L'affichage des projets se fait dans l'ordre de la liste.
      4: mettre à jour le fichier coté hébergeur.

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
      Tu supprime simplement son nom de la liste dans "liste des projets". Si tu veux le remettre plus tard, il suffira de reécrire son nom dans la liste.

   Pour supprimer totalement un projet:
      Tu le retire de la liste dans "liste des projets", et tu supprime son bloc de code dans "tous les projets"

   Pour modifier l'ordre d'affichage des projets sur la page:
      Les projets s'affichent sur la page dans l'ordre où ils apparaissent dans "liste des projets". Si tu modifie l'ordre de la liste ça modifie l'affichage.
*/

// tous les projets:
let witchyWeen = {
   id: "ça tu le laisse, c'est le code qui le gère",
   img: "witchy-ween.webp",
   ajust: ``,
   alt: `Photo portrait buste d'une sorcière d'Halloween qui tiens dans ses mains un crâne fumant.`,
   figcaption: "Witchy ween !",
   p: `Dernier post pour les séances Halloween ! Je vous ai fais un récap des meilleures photos et thèmes que j’ai pu faire ! Ici la dernière, la séance sorcière. J’espère que ca vous plaira ! N’hésitez pas à partager !`,
   a: `https://florencedemeusy.fr/2023/11/10/witchy-ween/`
};

let coupleHalloween = {
   id: "ça tu le laisse, c'est le code qui le gère",
   img: "couple-halloween .webp",
   ajust: `50% 90%`,
   alt: `Photo de deux personnages en salopette avec des têtes en forme de citrouilles d'Halloween, dans une forêt automnale.`,
   figcaption: `Couple Halloween !`,
   p: `Aaaahh cette séance totalement spontané figure par une de mes préférés de ces temps ci ! C’était fun, c’était spooky, c’était mignon, bref, j’ai adorée !! L’année prochaine j’espère vous voir bien plus nombreux à sauter le pas pour faire ce type de séance !! Vous allez pas être déçu du résultat je vous le… `,
   a: `https://florencedemeusy.fr/2023/11/09/couple-halloween/`
};

let babylloween = {
   id: "ça tu le laisse, c'est le code qui le gère",
   img: "babylloween.webp",
   ajust: ``,
   alt: `Un bébé souriant habillé en petit paysan trop mignon, dans un décors de grange à paille avec des citrouilles d'Halloween.`,
   figcaption: `Babylloween`,
   p: `Voici ma séance baby épouvantail ultra mignonne suivis de quelques clichés fantômes de cette période d’Halloween. Merci à Mélodie et Steve de m’autoriser à publier les images de leur petit tout Evan ! La spooky season étant terminé, j’ai déjà hâte la prochaine !`,
   a: `https://florencedemeusy.fr/2023/11/08/babylloween/`
};

let etienne = {
   id: "ça tu le laisse, c'est le code qui le gère",
   img: "micro-et-jazz.webp",
   ajust: ``,
   alt: `Photo gros plan sur un micro rétro, l'arrière plan est flouté et montre un homme jouant du saxophone.`,
   figcaption: `Etienne`,
   p: `Suite à de nombreux messages reçu après avoir postée les témoignages que j’ai obtenus, dont celui de Etienne, vous avez été pas mal de personnes à avoir été interpellé par ses photos que je n’ai jamais posté (d’ailleurs je me demande pourquoi je ne l’ai jamais fait).. Pour la petite histoire, j’ai découvert Etienne il… `,
   a: "https://florencedemeusy.fr/2023/07/14/etienne/"
};



// liste des projets:
const listeProjets = [
   witchyWeen, coupleHalloween, babylloween, etienne
];



/* Ne rien modifier à partir de cette ligne.

travail à faire:
   - définir un nombre de caratères max pour la boite .works article p et faire que, si le texte dépasse, il est tronqué et ça affiche 3 points de suspension.
      une fois que c'est fait, copier l'intégralité du contenus des paragraphes (pour Couple Halloween et pour Etienne) depuis leur lien et remplacer le contenus actuel de leurs p.
   - re-créer les liens entre le css et les éléments dans works pour la police d'écriture.
*/

// change l'id de l'objet en fonction de sa position dans le tableau
function idDefiner(listeProjets) {
   listeProjets.forEach((projet, index) => {
      projet.id = index + 1;
   });
};

// ajoute la liste des projets au html
function addWorks(listeProjets) {
   const works = document.querySelector(".works ul");

   listeProjets.forEach((projet) => {
      const li = document.createElement("li");
      const article = document.createElement("article");
      const figure = document.createElement("figure");
      const aImg = document.createElement("a");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const p = document.createElement("p");
      const aReadMore = document.createElement("a");

      aImg.href = projet.a;
      aImg.target= "_blank";
      img.src = `assets/images/${projet.img}`;
      img.alt = projet.alt;
      img.style = `object-position: ${projet.ajust}`;
      figcaption.textContent = projet.figcaption;
      p.textContent = projet.p;
      aReadMore.href = projet.a;
      aReadMore.target= "_blank";

      /* modèle à construire:
         <li>
            <article>
               <figure>
                  <a><img></a>
                  <figcaption></figcaption>
                  <p>texte</p>
                  <a>Lire la suite</a>
               </figure>
            </article>
         </li>
      */
      aImg.appendChild(img);
      figure.appendChild(aImg);
      figure.appendChild(figcaption);
      figure.appendChild(p);
      aReadMore.innerHTML= "Lire la suite";
      figure.appendChild(aReadMore);
      article.appendChild(figure);
      li.appendChild(article);
      works.appendChild(li);

      // définit une marge d'un coté ou de l'autre de l'article selon si il est placé à gauche ou à droite sur les grands écrans.
      article.className = ((projet.id % 2 === 0) ? "rightArticle" : "leftArticle");
   });
};

function main() {
   idDefiner(listeProjets)
   addWorks(listeProjets)
};

main();