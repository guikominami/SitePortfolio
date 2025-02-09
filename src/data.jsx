import unati from "./assets/imgs/unati.png";
import bolorie from "./assets/imgs/bolorie.png";
import quizgame from "./assets/imgs/quizgame.png";
import art from "./assets/imgs/art.png";
import omec from "./assets/imgs/omec.png";
import mudalab from "./assets/imgs/mudalab.png";
import mapa from "./assets/imgs/mapa.png";
import libraryapi from "./assets/imgs/library.png";

export const projects = [
  {
    id: 1,
    title: "APP FOR E-LEARNING",
    descriptionEn:
      "App designed for teaching the Terena language of the Brazilian Indigenous people.",
    descriptionPt:
      "Tradutor para aprendizagem da língua do povo indígena brasileiro Terena.",
    img: unati,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://oraculocomunica.eco.br/unati/",
  },
  {
    id: 2,
    title: "Library system Backend",
    descriptionEn: "Library system backend created with NodeJS and MongoDB.",
    descriptionPt:
      "Backend de um sistema de biblioteca criado em NodeJs and MongoDB.",
    img: libraryapi,
    techs: ["Backend", "NodeJS", "MongoDB"],
    link: "https://mudalab.com.br/libraryapi/",
  },
  {
    id: 3,
    title: "E-COMMERCE BOLORIÊ",
    descriptionEn:
      "E-commerce platform for selling handmade products created by the Boloriê Umutina Indigenous ethnic group from the Mato Grosso do Sul region, Brazil.",
    descriptionPt:
      "Loja virtual para venda dos produtos elaborados pela etinia indígena Boloriê Umutina da região do Mato Grosso do Sul - Brasil.",
    img: bolorie,
    techs: ["PHP", "SQL"],
    link: "https://bolorieumutina.com.br/",
  },
  {
    id: 4,
    title: "VIRTUAL SOUND MAP",
    descriptionPt:
      "Exposição virtual de contos da artista Dunga Rodrigues de Cuiabá - Brasil.",
    descriptionEn:
      "Virtual exhibition of short stories by the artist Dunga Rodrigues from Cuiabá, Brazil.",
    img: mapa,
    techs: ["HTML", "CSS"],
    link: "https://grupotibanare.com.br/",
  },
  {
    id: 5,
    title: "WEBSITE MUDALAB",
    descriptionPt:
      "Negócio social que usa a tecnologia e educação para o desafio de soluções. Inspirado em Inovação Cidadã, Movimento Maker e Aprendizagem criativa",
    descriptionEn:
      "A website for a social business that combines technology and social knowledge to help solve global challenges.",
    img: mudalab,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://mudalab.com.br/",
  },
  {
    id: 6,
    title: "Quiz RPG Game",
    descriptionPt:
      "Um jogo de RPG em que para derrotar o oponente, é necessário responder questões sobre diversos temas, além de contar com a sorte.",
    descriptionEn:
      "An RPG game where you defeat your opponent by answering questions on various topics, while also relying on luck.",
    img: quizgame,
    techs: ["ReactJs", "Frontend", "API"],
    link: "https://mudalab.com.br/rpgquizgame/",
    code: "https://codesandbox.io/p/github/guikominami/RpgGameQuiz/main?import=true",
  },
  {
    id: 7,
    title: "A GAMIFIED GRAPHIC STORYTELLING TOOL",
    descriptionPt:
      "Dispositivo de narrativa gráfica gamificada desenvolvido com Raspberry Py que estimula a reflexão sobre o livro 1984, de George Orwell e a realidade que estamos vivendo em nossa sociedade atual.",
    descriptionEn:
      "A gamified graphic narrative device developed with Raspberry Pi that encourages reflection on George Orwell's 1984 and its connection to the reality of our current society.",

    img: omec,
    techs: ["Python", "Frontend", "SQL"],
    link: "https://www.bibliolab.com.br/post/omec-uma-experi%C3%AAncia-multissensorial-de-leitura-de-1984",
  },
  {
    id: 8,
    title: "Art Portfolio",
    descriptionPt:
      "Portfólio de arte com desenhos digitais, feitos a mão e esboços do artista Otto Kominami.",
    descriptionEn:
      "An art portfolio featuring digital and handmade drawings and sketches by the young artist Otto Kominami.",
    img: art,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://mudalab.com.br/artportfolio/",
    code: "https://codesandbox.io/p/github/guikominami/ArtPortfolio/draft/lucid-pine",
  },
];
