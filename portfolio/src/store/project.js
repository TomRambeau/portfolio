export const projects = [
  {
    id: 1,
    title: "DomiSoins",
    description: "Application mobile pour les soins à domicile.",
    longDescription: "Domisoins est l'application mobile pour les professionnels de soin à domicile. Elle permet aux praticiens de planifier leurs rendez-vous, de suivre les soins à domicile et de générer l'itinéraire de la tournée. Domisoins est une application intuitive et facile à utiliser, qui permet de gagner du temps et de simplifier la gestion des soins à domicile.",
    technologies: ["IOS", "Android", ".NET MAUI", "C#", "XAML"],
    image: "/projects/domisoins.png",
    demo: "https://youtube.com/shorts/avgBAYklWwg",
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
        url: "/projects/domisoins/Image1.svg",
        caption: "Menu principal"
      },
      {
        url: "/projects/domisoins/domisoins.png",
        caption: "Planning journalier"
      },
      {
        url: "/projects/domisoins/patient.png",
        caption: "Fiche patient"
      },
      {
        url: "/projects/domisoins/map.png",
        caption: "Carte des rendez-vous"
      }
    ],
    status: "En développement",
    startDate: "2024",
    role: "Développeur principal",
  },
  {
    id: 2,
    title: "3DMino",
    description: "Jeu Chromino en ligne avec mode multijoueur et visualisation 3D.",
    longDescription: "Projet réalisé en équipe de 6 personnes, comprenant un site web et une application mobile permettant de jouer au jeu Chromino en ligne. Les joueurs peuvent s'affronter en multijoueur ou contre une IA, avec une visualisation 3D unique des parties.",
    technologies: ["PHP", "JS", "Twig/CSS", "Node.js", "Three.js", "MySQL", "Kotlin", "Blazor", "EntityFramework", ".NET API REST"],
    image: "/projects/3dmino/main.png",
    demo: "https://www.youtube.com/watch?v=Z8-836uHfRw",
    features: [
      "Mode multijoueur en temps réel",
      "Visualisation 3D des parties",
      "Support de différentes tailles et formes de chrominos",
      "IA pour remplacer les joueurs absents",
      "Chat en temps réel",
      "Classement des joueurs"
    ],
    gallery: [
      {
        url: "/projects/3dmino/game.png",
        caption: "Vue du jeu en 3D"
      },
      {
        url: "/projects/3dmino/lobby.png",
        caption: "Lobby multijoueur"
      },
      {
        url: "/projects/3dmino/mobile.png",
        caption: "Version mobile"
      }
    ],
    status: "Terminé",
    startDate: "2023",
    role: "Développeur full-stack",
    teamSize: "6 personnes"
  },
  {
    id: 3,
    title: "YouDebunk",
    description: "Plateforme de vérification et publication d'articles sourcés.",
    longDescription: "Application web et mobile développée en équipe de 5, permettant la publication d'articles avec un système innovant de vérification des sources. La plateforme calcule automatiquement un score de fiabilité basé sur la qualité et la quantité des sources citées.",
    technologies: ["PHP", "JavaScript", "Twig/CSS", "MySQL", "Kotlin", "Blazor", "SpringBoot"],
    image: "/projects/youdebunk/home.png",
    features: [
      "Système de publication d'articles",
      "Vérification automatique des sources",
      "Visualisation du texte sourcé",
      "Calcul du score de fiabilité",
      "Interface de recherche avancée",
      "Système de commentaires et de notation"
    ],
    gallery: [
      {
        url: "/projects/youdebunk/editor.png",
        caption: "Éditeur d'article"
      },
      {
        url: "/projects/youdebunk/article.png",
        caption: "Vue d'un article"
      },
      {
        url: "/projects/youdebunk/mobile.png",
        caption: "Interface mobile"
      }
    ],
    status: "Terminé",
    startDate: "2023",
    role: "Lead développeur frontend",
    teamSize: "5 personnes"
  }
];
