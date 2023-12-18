// tous les projets:
let witchyWeen = {
   id: "ça tu le laisse, c'est le code qui le gère",
   nomProjet: "witchyWeen",
   img: "witchy-ween.webp",
   ajust: ``,
   alt: `Photo portrait buste d'une sorcière d'Halloween qui tiens dans ses mains un crâne fumant.`,
   figcaption: "Witchy ween !",
   p: `Dernier post pour les séances Halloween ! Je vous ai fais un récap des meilleures photos et thèmes que j’ai pu faire ! Ici la dernière, la séance sorcière. J’espère que ca vous plaira ! N’hésitez pas à partager !`,
   a: `https://florencedemeusy.fr/2023/11/10/witchy-ween/`
};

let coupleHalloween = {
   id: "ça tu le laisse, c'est le code qui le gère",
   nomProjet: "coupleHalloween",
   img: "couple-halloween .webp",
   ajust: `50% 90%`,
   alt: `Photo de deux personnes en salopette et chemise à carreaux avec des têtes en forme de citrouilles d'Halloween, dans une forêt automnale.`,
   figcaption: `Couple Halloween !`,
   p: `Aaaahh cette séance totalement spontané figure par une de mes préférés de ces temps ci ! C’était fun, c’était spooky, c’était mignon, bref, j’ai adorée !! L’année prochaine j’espère vous voir bien plus nombreux à sauter le pas pour faire ce type de séance !! Vous allez pas être déçu du résultat je vous le garante, il y a tellement de choses et styles différent a explorer ! J’ai déjà un couple qui a booké une séance de ce genre et j’ai vraiment très hâte ! Merci à Nathalie et Patrick de s’être prêté au jeu !`,
   a: `https://florencedemeusy.fr/2023/11/09/couple-halloween/`
};

let babylloween = {
   id: "ça tu le laisse, c'est le code qui le gère",
   nomProjet: "babylloween",
   img: "babylloween.webp",
   ajust: ``,
   alt: `Un bébé souriant habillé en petit épouvantail trop mignon, dans un décors de grange à paille avec des citrouilles d'Halloween.`,
   figcaption: `Babylloween`,
   p: `Voici ma séance baby épouvantail ultra mignonne suivis de quelques clichés fantômes de cette période d’Halloween. Merci à Mélodie et Steve de m’autoriser à publier les images de leur petit tout Evan ! La spooky season étant terminé, j’ai déjà hâte la prochaine !`,
   a: `https://florencedemeusy.fr/2023/11/08/babylloween/`
};

let etienne = {
   id: "ça tu le laisse, c'est le code qui le gère",
   nomProjet: "etienne",
   img: "etienne.webp",
   ajust: ``,
   alt: `Photo gros plan sur un micro rétro, l'arrière plan est flouté et montre un homme jouant du saxophone.`,
   figcaption: `Etienne`,
   p: `Suite à de nombreux messages reçu après avoir posté les témoignages que j’ai obtenus, dont celui de Etienne, vous avez été pas mal de personnes à avoir été interpellés par ses photos que je n’ai jamais postées (d’ailleurs je me demande pourquoi je ne l’ai jamais fait).. Pour la petite histoire, j’ai découvert Etienne il y à déjà de nombreuses années. Il jouait au pied du Palais des Papes en Avignon et je me rappelle avoir été fascinée par son talent, que je vous laisse découvrir avec cette video (aucune des videos ne sont de moi). Puis les années sont passé et j’ai pu recroiser sa route lors d’un mariage que j’ai couvert puis encore quelques années plus tard à mon ancien lieu de travail. De fil en aiguille nous avons pu organiser une séance photo pour ses cartes de voeux pour la nouvelle année et ce sont aujourd’hui ces dites photos que je souhaite partager avec vous et vous faire découvrir. D’ailleurs si jamais vous souhaitez vous marier ou avez besoins simplement d’un talentueux chanteur de Jazz pour un évènement, je vous recommande vivement de contacter Etienne. Non seulement il a un talent fou mais en plus il est vraiment très gentil et drôle.`,
   a: "https://florencedemeusy.fr/2023/07/14/etienne/"
};

// liste des projets affichés:
const listeProjets = [
   witchyWeen, coupleHalloween, babylloween, etienne
];

// change l'id de l'objet en fonction de sa position dans le tableau
function idDefiner(listeProjets) {
   listeProjets.forEach((projet, index) => {
      projet.id = index;
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
      const pa = document.createElement("p");
      const aReadMore = document.createElement("a");

      aImg.href = projet.a;
      aImg.target= "_blank";
      img.src = `assets/images/works/${projet.nomProjet}/${projet.img}`;
      img.alt = projet.alt;
      img.style = `object-position: ${projet.ajust}`;
      figcaption.textContent = projet.figcaption;
      p.className = "articleStory";
      p.textContent = projet.p;
      aReadMore.href = projet.a;
      aReadMore.target= "_blank";

      /* modèle à construire:
         <li>
            <article>
               <figure>
                  <a><img></a>
                  <figcaption></figcaption>
               </figure>
               <p>texte</p>
               <p><a>Lire la suite</a></p>
            </article>
         </li>
      */
      aImg.appendChild(img);
      figure.appendChild(aImg);
      figure.appendChild(figcaption);
      aReadMore.innerHTML= "Lire la suite";
      pa.appendChild(aReadMore);
      article.appendChild(figure);
      article.appendChild(p);
      article.appendChild(pa);
      li.appendChild(article);
      works.appendChild(li);

      // définit une marge d'un coté ou de l'autre de l'article selon si il est placé à gauche ou à droite sur les grands écrans.
      article.className = ((projet.id % 2 === 0) ? "leftArticle" : "rightArticle");
   });
};

// ajuste la hauteur du paragraphe en fonction de sa largeur. moins le paragraphe est long, plus il deviens haut pour contenir la même 
function heightCalc() {
   const paragraphs = document.querySelectorAll(".articleStory");
   const maxWidthPx = 600;
   const pHeightPx = 145;

   paragraphs.forEach((p) => {
     const pWidth = p.getBoundingClientRect().width;
     const coefficient = maxWidthPx / pWidth;
     p.style.height = `${pHeightPx * coefficient}px`;
   });
 };

function main() {
   idDefiner(listeProjets);
   addWorks(listeProjets);
   window.addEventListener('resize', heightCalc);
   heightCalc();
};

main();