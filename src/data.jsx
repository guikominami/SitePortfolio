import unati from "./assets/imgs/unati.png";
import bolorie from "./assets/imgs/bolorie.png";
import quizgame from "./assets/imgs/quizgame.png";
import art from "./assets/imgs/art.png";
import omec from "./assets/imgs/omec.png";
import mudalab from "./assets/imgs/mudalab.png";
import mapa from "./assets/imgs/mapa.png";

export const projects = [
  {
    id: 1,
    title: "Unati",
    descriptionEn:
      "App for teaching the Terena Brazilian indigenous people language.",
    descriptionPt:
      "Tradutor para aprendizagem da língua do povo indígena brasileiro Terena.",
    img: unati,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://oraculocomunica.eco.br/unati/",
  },
  {
    id: 2,
    title: "Boloriê Umutina",
    descriptionEn:
      "E-commerce for sale the products made by the Boloriê Umutina indigenous ethnic group from the Mato Grosso do Sul region - Brazil.",
    descriptionPt:
      "Loja virtual para venda dos produtos elaborados pela etinia indígena Boloriê Umutina da região do Mato Grosso do Sul - Brasil.",
    img: bolorie,
    techs: ["PHP", "SQL"],
    link: "https://bolorieumutina.com.br/",
  },
  {
    id: 3,
    title: "Quiz RPG Game",
    descriptionPt:
      "Um jogo de RPG em que para derrotar o oponente, é necessário responder questões sobre diversos temas, além de contar com a sorte.",
    descriptionEn:
      "An RPG game in which to defeat your opponent, you need to answer questions on different topics, in addition to relying on luck.",
    img: quizgame,
    techs: ["ReactJs", "Frontend", "API"],
    link: "https://mudalab.com.br/rpgquizgame/",
    code: "https://codesandbox.io/p/github/guikominami/RpgGameQuiz/main?import=true",
  },
  {
    id: 4,
    title: "Mudalab",
    descriptionPt:
      "Negócio social que usa a tecnologia e educação para o desafio de soluções. Inspirado em Inovação Cidadã, Movimento Maker e Aprendizagem criativa",
    descriptionEn:
      "Social business that combines technology and social knowledge to contribute to the solution of challenges. ",
    img: mudalab,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://mudalab.com.br/",
  },
  {
    id: 5,
    title: "OMEC",
    descriptionPt:
      "Dispositivo de narrativa gráfica gamificada desenvolvido com Raspberry Py que estimula a reflexão sobre o livro 1984, de George Orwell e a realidade que estamos vivendo em nossa sociedade atual.",
    descriptionEn:
      "Gamified graphic narrative device developed with Raspberry Py that encourages reflection on the book 1984 by George Orwell and the reality we are living in our current society.",

    img: omec,
    techs: ["Python", "Frontend", "SQL"],
    link: "https://www.bibliolab.com.br/post/omec-uma-experi%C3%AAncia-multissensorial-de-leitura-de-1984",
  },
  {
    id: 6,
    title: "Mapa Sonoro",
    descriptionPt:
      "Exposição virtual de contos da artista Dunga Rodrigues de Cuiabá - Brasil.",
    descriptionEn:
      "Virtual exhibition of short stories by artist Dunga Rodrigues from Cuiabá - Brazil.",
    img: mapa,
    techs: ["HTML", "CSS"],
    link: "https://grupotibanare.com.br/",
  },
  {
    id: 7,
    title: "Art Portfólio",
    descriptionPt:
      "Portfólio de arte com desenhos digitais, feitos a mão e esboços do artista Otto Kominami.",
    descriptionEn:
      "Art portfolio with digital, handmade drawings and sketches by artist Otto Kominami.",
    img: art,
    techs: ["ReactJs", "Frontend", "CSS"],
    link: "https://mudalab.com.br/artportfolio/",
    code: "https://codesandbox.io/p/github/guikominami/ArtPortfolio/draft/lucid-pine",
  },
];
