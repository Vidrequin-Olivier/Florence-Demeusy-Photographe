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

/*
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