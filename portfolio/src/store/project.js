export const projects = [
  {
    id: 1,
    title: "DomiSoins",
    description: "Application mobile pour les soins à domicile.",
    longDescription: "Domisoins est l'application mobile pour les **professionnels de soin à domicile**." +
                    "Elle permet aux praticiens de **planifier leurs rendez-vous**, de **suivre les soins à domicile** " +
                    "et de **générer l'itinéraire de la tournée**." +
                    "Domisoins est une application **intuitive** et **facile à utiliser**, qui permet de gagner du temps " +
                    "et de simplifier la gestion des soins à domicile.",
    technologies: ["IOS", "Android", ".NET MAUI", "C#", "XAML"],
    image: "/projects/domisoins/domisoins.png",
    demo:"https://youtube.com/shorts/avgBAYklWwg",
    workflow: "Le professionnel de santé retrouve sur la **page d'accueil** de l'application les patients qu'il a ajouté." +
              "Ensuite, l'utilisateur peut **planifier sa journée**, sa semaine sur la page du planning voir même inclure " +
              "une **récurennce de rendez-vous**." +
              "Il peut aussi en **un clique** créer l'itinéraire sur les applications de navigations (google maps, ...) " +
              "passant par 1 ou tous les patients." +
              "Il pourra aussi voir les **soins à effectuer** pour chaque patient et **prendre des notes** sur les soins effectués.",
    features: [
      "Plannification des rendez-vous des patients",
      "Suivi des soins à domicile",
      "Interface intuitive pour les praticiens",
      "Notifications et rappels",
      "Itinéraire de la tournée",
      "Itinéraire vers un patient",
    ],
    gallery: [
      {
        url: "/projects/domisoins/page_accueil.png",
        caption: "Accueil / Liste des patients"
      },
      {
        url:"/projects/domisoins/page_planning.png",
        caption: "Planning"
      },
      {
        url: "/projects/domisoins/page_ordonnanceListe.png",
        caption: "Liste des ordonnances"
      },
      {
        url: "/projects/domisoins/page_ordonnance.png",
        caption: "Ordonnance"
      },
      {
        url: "/projects/domisoins/page_ajoutPatient.png",
        caption: "Formulaire d'ajout de patient"
      },
      {
        url: "/projects/domisoins/page_ajoutRdv.png",
        caption: "Formulaire d'ajout de rendez-vous"
      }
    ],
  },
  {
    id: 2,
    title: "3DMino",
    description: "Projet (Apprentissage) de site Web et Application mobile du jeu Chromino en équipe de 6.",
    longDescription: "La création d'un **site web** et d'une **application mobile** pour jouer au jeu Chromino\n" +
                    "à plusieurs **en ligne** ou contre une **intelligence artificielle**.",
    technologies: ["PHP","JS", "Twig/CSS", "Node.js","TRee.js", "Mysql", "Kotlin",
                  "Blazor", "EntityFramework", ".NET API REST"],
    image: "/projects/3Dmino/3DMino.png",
    demo: "https://www.youtube.com/watch?v=Z8-836uHfRw",
    workflow: "En entrant sur la page d'accueil du site, on peut **lister les lobbies** en cours et en rejoindre un pas encore lancé." +
              "On peut aussi **créer un looby** en choisissant les paramètres de la partie (**mode 3D**, plusieurs formes, " +
              "plusieurs tailles, ...).\n\n" +
              "Une fois dans le lobby, le **maitre du lobby** peut lancer la partie ensuite les joueurs peuvent un à un " +
              "poser leurs chrominos chaucun leurs tours." +
              "Si un joueur a quitté la partie, il est **remplacé par une IA** ne bloquant pas les autres joueurs." +
              "Le jeu se termine quand un joueur n'a plus de chromino ou que la pioche est vide.",
    features: [
      "Jouer en ligne à plusieurs",
      "Jeu en 3D possible",
      "Plusieurs tailles de chromino",
      "Plusieurs formes de chromino",
      "Plusieurs modes de jeu paramétrables",
      "Joueurs absents remplacés par une IA"
    ],
    gallery: [
      {
        url: "/projects/3Dmino/page_lobby.png",
        caption: "Accueil"
      },
      {
        url: "/projects/3Dmino/page_jeu.png",
        caption: "Une partie classique"
      },
      {
        url: "/projects/3Dmino/page_jeu_3D.png",
        caption: "Mode 3D"
      },
      {
        url: "/projects/3Dmino/rules.gif",
        caption: "Fonctionnement du jeu"
      }
    ],
  },
  {
    id: 3,
    title: "YouDebunk",
    description: "Projet (Apprentissage) de site Web et Application mobile de publication d'articles vérifiés en équipe de 5.",
    longDescription: "La création d'un **site web** et d'une **application mobile** pour publier des **articles sourcés** avec un **calcul de pourcentage** de vérification.",
    technologies: ["PHP", "JavaScript", "Twig/CSS", "html/CSS", "Mysql", "Kotlin", "Blazor", "SpringBoot"],
    image: "/projects/youDebunk/logoYouDebunk.png",
    workflow: "Sur la page d'accueil, on peut **lister les articles** publiés et **lire** ceux qui nous intéressent." +
              "On peut aussi **ajouter un article** en remplissant un formulaire avec les sources, le texte, l'image." +
              "Ensuite, on peut voir les **sources** et le **texte sourcé** mis en lumière pour voir les vérifications." +
              "Un **pourcentage de vérification** de l'article est calculé automatiquement.",

    features: [
      "Publication d'articles",
      "Ajout de sources",
      "Mise en lumières du texte sourcé",
      "Pourcentage de vérifications des articles calculé"
    ],
    gallery: [
      {
        url: "/projects/youDebunk/page_accueil_web.png",
        caption: "Accueil web"
      },
      {
        url: "/projects/youDebunk/page_accueil_mobile.png",
        caption: "Accueil mobile"
      },
      {
        url: "/projects/youDebunk/page_article_mobile.png",
        caption: "Article mobile"
      },
    ],
  }
];
