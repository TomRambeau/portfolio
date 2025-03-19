export const projects = [
  {
    id: 1,
    title: "DomiSoins",
    description: "Application mobile pour les soins à domicile.",
    longDescription: "Domisoins est l'application mobile pour les professionnels de soin à domicile. Elle permet aux praticiens de planifier leurs rendez-vous, de suivre les soins à domicile et de générer l'itinéraire de la tournée. Domisoins est une application intuitive et facile à utiliser, qui permet de gagner du temps et de simplifier la gestion des soins à domicile.",
    technologies: ["IOS", "Android", ".NET MAUI", "C#", "XAML"],
    image: "/projects/domisoins/domisoins.png",
    demo:"https://youtube.com/shorts/avgBAYklWwg",
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
        url: "/projects/domisoins/domisoins.png",
        caption: "Interface principale"
      },
      {
        url: "/projects/domisoins/app2.png",
        caption: "Planning des rendez-vous"
      },
      {
        url: "/projects/domisoins/app3.png",
        caption: "Fiche patient"
      },
      {
        url: "/projects/domisoins/app4.png",
        caption: "Navigation GPS"
      }
    ],
  },
  {
    id: 2,
    title: "3DMino",
    description: "Projet (Apprentissage) de site Web et Application mobile du jeu Chromino en équipe de 6.",
    longDescription: "La création d'un site web et d'une application mobile pour jouer au jeu Chromino en mode multijoueur ou contre une intelligence artificielle.",
    technologies: ["PHP","JS", "Twig/CSS", "Node.js","TRee.js", "Mysql", "Kotlin",
                  "Blazor", "EntityFramework", ".NET API REST"],
    image: "/projects/3Dmino/3DMino.png",
    demo: "https://www.youtube.com/watch?v=Z8-836uHfRw",
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
        url: "/projects/3DMino/game1.png",
        caption: "Vue du jeu en 3D"
      },
      {
        url: "/projects/3DMino/game2.png",
        caption: "Mode multijoueur"
      },
      {
        url: "/projects/3DMino/game3.png",
        caption: "Paramètres de partie"
      }
    ],
  },
  {
    id: 3,
    title: "YouDebunk",
    description: "Projet (Apprentissage) de site Web et Application mobile de publication d'articles vérifiés en équipe de 5.",
    longDescription: " La création d'un site web et d'une application mobile pour publier des articles sourcés avec un calcul de pourcentage de vérification.",
    technologies: ["PHP", "JavaScript", "Twig/CSS", "html/CSS", "Mysql", "Kotlin", "Blazor", "SpringBoot"],
    image: "/projects/youDebunk/logoYouDebunk.png",
    features: [
      "Publication d'articles",
      "Ajout de sources",
      "Mise en lumières du texte sourcé",
      "Pourcentage de vérifications des articles calculé"
    ],
    gallery: [
      {
        url: "/projects/youDebunk/page_accueil_web.png",
        caption: "page d'accueil web"
      },
      {
        url: "/projects/youDebunk/page_accueil_mobile.png",
        caption: "page d'accueil mobile"
      },
      {
        url: "/projects/youDebunk/page_article_mobile.png",
        caption: "article mobile"
      }
    ],
  }
];
