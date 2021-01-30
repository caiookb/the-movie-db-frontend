export const matchGenreByNameToId = (name) =>
  ({
    acao: 28,
    aventura: 12,
    animacao: 16,
    comedia: 35,
    crime: 80,
    documentario: 99,
    drama: 18,
    familia: 10751,
    fantasia: 14,
    historia: 36,
    terror: 27,
    musica: 10402,
    romance: 10749,
    "ficcao cientifica": 878,
    "cinema tv": 10770,
    thriller: 53,
    guerra: 10752,
    faroeste: 37,
  }[replaceSpecialChars(name.toLowerCase())]);

const replaceSpecialChars = (str) => {
  str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
  str = str.replace(/[àáâãäå]/, "a");
  str = str.replace(/[ÈÉÊË]/, "E");
  str = str.replace(/[Ç]/, "C");
  str = str.replace(/[ç]/, "c");

  return str.replace(/[^a-z0-9]/gi, " ");
};

export const genres = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
  { id: 35, name: "Comédia" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentário" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Família" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "História" },
  { id: 27, name: "Terror" },
  { id: 10402, name: "Música" },
  { id: 9648, name: "Mistério" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ficção científica" },
  { id: 10770, name: "Cinema TV" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "Guerra" },
  { id: 37, name: "Faroeste" },
];

export const moviesList = [
  {
    adult: false,
    backdrop_path: "/nKM71iyHoXG2DUBXml0mNwPChvg.jpg",
    genre_ids: [35, 10749, 10770],
    id: 647325,
    original_language: "en",
    original_title: "The Thing About Harry",
    overview:
      "Os inimigos no Ensino médio, Harry e Sam, são forçados a compartilhar uma carona até sua cidade natal para uma festa. As coisas mudam quando Sam descobre que Harry se assumiu Pansexual. Obrigados a passar a noite juntos, Harry e Sam se perguntam se eles podem ser mais do que amigos.",
    popularity: 135.774,
    poster_path: "/sdn5NdFMcsub3QUwlovOA9fPJoW.jpg",
    release_date: "2020-02-15",
    title: "Coisas sobre Harry",
    video: false,
    vote_average: 7.9,
    vote_count: 89,
  },
  {
    adult: false,
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    genre_ids: [12, 14],
    id: 671,
    original_language: "en",
    original_title: "Harry Potter and the Philosopher's Stone",
    overview:
      "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
    popularity: 160.753,
    poster_path: "/qnw9610ojLT0jU3lMSZOAFttt1e.jpg",
    release_date: "2001-11-16",
    title: "Harry Potter e a Pedra Filosofal",
    video: false,
    vote_average: 7.9,
    vote_count: 19429,
  },
  {
    adult: false,
    backdrop_path: "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
    genre_ids: [12, 14, 10751],
    id: 674,
    original_language: "en",
    original_title: "Harry Potter and the Goblet of Fire",
    overview:
      "Em seu 4º ano na Escola de Magia e Bruxaria de Hogwarts, Harry Potter é misteriosamente selecionado para participar do Torneio Tribruxo, uma competição internacional em que precisará enfrentar alunos mais velhos e experientes de Hogwarts e também de outras escolas de magia. Além disso a aparição da marca negra de Voldemort ao término da Copa do Mundo de Quadribol põe a comunidade de bruxos em pânico, já que sinaliza que o temido bruxo está prestes a retornar.",
    popularity: 155.452,
    poster_path: "/5oWB3hjzyECRBAjgWkmZinxl9qA.jpg",
    release_date: "2005-11-16",
    title: "Harry Potter e o Cálice de Fogo",
    video: false,
    vote_average: 7.8,
    vote_count: 14920,
  },
  {
    adult: false,
    backdrop_path: "/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg",
    genre_ids: [12, 14],
    id: 767,
    original_language: "en",
    original_title: "Harry Potter and the Half-Blood Prince",
    overview:
      "No sexto ano de Harry em Hogwarts, Lord Voldemort e seus Comensais da Morte estão criando o terror nos mundos bruxo e trouxa. Dumbledore convence seu velho amigo Horácio Slughorn para retornar a Hogwarts como professor de poções após Harry encontrar um estranho livro escolar. Draco Malfoy se esforça para realizar uma ação destinada por Voldemort, enquanto Dumbledore e Harry secretamente trabalham juntos a fim de descobrir o método para destruir o Lorde das Trevas uma vez por todas.",
    popularity: 122.725,
    poster_path: "/hTQQ5l9mxA3Rob8PTyvrNNGuj6y.jpg",
    release_date: "2009-07-07",
    title: "Harry Potter e o Enigma do Príncipe",
    video: false,
    vote_average: 7.7,
    vote_count: 14054,
  },
  {
    adult: false,
    backdrop_path: "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
    genre_ids: [12, 14],
    id: 672,
    original_language: "en",
    original_title: "Harry Potter and the Chamber of Secrets",
    overview:
      "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático.",
    popularity: 141.165,
    poster_path: "/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
    release_date: "2002-11-13",
    title: "Harry Potter e a Câmara Secreta",
    video: false,
    vote_average: 7.7,
    vote_count: 15830,
  },
  {
    adult: false,
    backdrop_path: "/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg",
    genre_ids: [12, 14],
    id: 673,
    original_language: "en",
    original_title: "Harry Potter and the Prisoner of Azkaban",
    overview:
      "O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.",
    popularity: 138.563,
    poster_path: "/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg",
    release_date: "2004-05-31",
    title: "Harry Potter e o Prisioneiro de Azkaban",
    video: false,
    vote_average: 8,
    vote_count: 15556,
  },
  {
    adult: false,
    backdrop_path: "/pkxPkHOPJjOvzfQOclANEBT8OfK.jpg",
    genre_ids: [12, 14, 9648],
    id: 675,
    original_language: "en",
    original_title: "Harry Potter and the Order of the Phoenix",
    overview:
      "Harry Potter está em seu quinto ano em Hogwarts e acaba ouvindo que muitos não sabem a verdade sobre seu encontro com Lord Voldemort. O Ministro de Mágica, Cornelius Fudge, indica Dolores Umbridge para ser a nova professora de Defesa Contra as Artes das Trevas, por acreditar que Dumbledore planeja tomar seu lugar. Porém, os métodos que ela usa são totalmente inapropriados. Harry, então, se reúne com um grupo de alunos para defender sua escola.",
    popularity: 121.695,
    poster_path: "/tIf9aUyNljda9MG1pjlOLHCZ3b0.jpg",
    release_date: "2007-06-28",
    title: "Harry Potter e a Ordem da Fênix",
    video: false,
    vote_average: 7.7,
    vote_count: 14288,
  },
  {
    adult: false,
    backdrop_path: "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
    genre_ids: [14, 12],
    id: 12445,
    original_language: "en",
    original_title: "Harry Potter and the Deathly Hallows: Part 2",
    overview:
      "Harry Potter e seus amigos Rony Weasley e Hermione Granger seguem à procura das horcruxes. O objetivo do trio é encontrá-las e, em seguida, destruí-las, de forma a eliminar lorde Voldemort de uma vez por todas. Com a ajuda do duende Grampo, eles entram no banco Gringotes de forma a invadir o cofre de Bellatrix Lestrange. De lá retornam ao castelo de Hogwarts, onde precisam encontrar mais uma horcrux. Paralelamente, Voldemort prepara o ataque definitivo ao castelo.",
    popularity: 126.559,
    poster_path: "/yD3VosOVW8WxPUzBDpEdzfv5pGx.jpg",
    release_date: "2011-07-07",
    title: "Harry Potter e as Relíquias da Morte - Parte 2",
    video: false,
    vote_average: 8.1,
    vote_count: 15128,
  },
  {
    adult: false,
    backdrop_path: "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
    genre_ids: [12, 14],
    id: 12444,
    original_language: "en",
    original_title: "Harry Potter and the Deathly Hallows: Part 1",
    overview:
      "Sem a orientação e proteção de seus professores, Harry, Rony e Hermione iniciam uma missão para destruir as horcruxes, que são as fontes da imortalidade de Voldemort. Embora devam confiar um no outro mais do que nunca, forças das trevas ameaçam separá-los. Os Comensais da Morte de Voldemort tomaram o controle do Ministério da Magia e de Hogwarts, e eles estão procurando por Harry enquanto ele e seus amigos se preparam para o confronto final.",
    popularity: 114.634,
    poster_path: "/67FVFOTaeBUQnimhCWpUkDawDct.jpg",
    release_date: "2010-10-17",
    title: "Harry Potter e as Relíquias da Morte - Parte 1",
    video: false,
    vote_average: 7.8,
    vote_count: 14068,
  },
  {
    adult: false,
    backdrop_path: "/AhmRmdlu7GYdiucfZzVCGyP8ICf.jpg",
    genre_ids: [53, 80, 18, 28],
    id: 25941,
    original_language: "en",
    original_title: "Harry Brown",
    overview:
      "Harry Brown é um viúvo e ex-marine septuagenário, cuja vizinhança outrora pacata é hoje dominada pelo crime organizado, o tráfico de droga e a violência entre gangues. Quando o seu melhor amigo é brutamente assassinado e o responsável pelo crime é libertado, Harry leva o seu desejo de vingança ate aos limites e começa a impor a ordem aos jovens delinquentes pela lei das armas.",
    popularity: 15.556,
    poster_path: "/zthprdjuK7vN4ABBGQXo8RF7qYB.jpg",
    release_date: "2009-11-11",
    title: "Harry Brown",
    video: false,
    vote_average: 6.8,
    vote_count: 662,
  },
  {
    adult: false,
    backdrop_path: "/4LOxoeZWt5wr9mooxEZRFK96lDd.jpg",
    genre_ids: [99],
    id: 483898,
    original_language: "en",
    original_title: "50 Greatest Harry Potter Moments",
    overview: "",
    popularity: 53.308,
    poster_path: "/g1xiBoLD6v3ZaXPa4QtuXiQeYKW.jpg",
    release_date: "2011-07-27",
    title: "50 Greatest Harry Potter Moments",
    video: false,
    vote_average: 7.9,
    vote_count: 24,
  },
  {
    adult: false,
    backdrop_path: "/cXU4zg2aKglQrMOLokHLbnxwkGV.jpg",
    genre_ids: [35, 10749, 18],
    id: 639,
    original_language: "en",
    original_title: "When Harry Met Sally...",
    overview:
      "Harry e Sally vão morar em Nova York, se veem esporadicamente e constroem uma grande amizade ao longo dos anos. Mas, aos poucos, percebem com certo temor que estão apaixonados um pelo outro.",
    popularity: 15.455,
    poster_path: "/BTW9p26mVqckpq3f9kYxB4RELp.jpg",
    release_date: "1989-01-12",
    title: "Harry & Sally: Feitos um para o Outro",
    video: false,
    vote_average: 7.4,
    vote_count: 2736,
  },
  {
    adult: false,
    backdrop_path: "/22esNAKvdcHaeyzhXD5uhTjDwTK.jpg",
    genre_ids: [28, 80, 53],
    id: 984,
    original_language: "en",
    original_title: "Dirty Harry",
    overview:
      "O policial Harry Callahan tenta rastrear um assassino psicopata num terraço antes que uma garota sequestrada morra. Quando o encontra, Harry abusa do direito civil do assassino, o que o coloca de volta nas ruas. Um ônibus escolar é sequestrado e Harry sai à busca do assassino novamente e a única maneira de pará-lo é a sangue frio.",
    popularity: 10.754,
    poster_path: "/4QryAOGFrApqXYchrsSviFxHQMJ.jpg",
    release_date: "1971-07-14",
    title: "Perseguidor Implacável",
    video: false,
    vote_average: 7.5,
    vote_count: 1496,
  },
  {
    adult: false,
    backdrop_path: "/coJLkvK5KZQoMl8vGqcpgAZYroi.jpg",
    genre_ids: [35, 18],
    id: 2639,
    original_language: "en",
    original_title: "Deconstructing Harry",
    overview:
      "Harry Block é um escritor de sucesso que é convidado para receber uma homenagem na mesma universidade que um dia o rejeitou. Enquanto se prepara para a viagem, Harry é confrontado pelos seus personagens ficcionais, bem como pelas pessoas reais que não querem ter nada a ver com ele. O escritor percebe o quanto suas histórias afetaram as pessoas a seu redor.",
    popularity: 8.518,
    poster_path: "/rz0cls8nhbzIvcbntaICJDEnywl.jpg",
    release_date: "1997-12-12",
    title: "Desconstruindo Harry",
    video: false,
    vote_average: 7.4,
    vote_count: 539,
  },
  {
    adult: false,
    backdrop_path: "/bDqchWjPhko0XvRBx4pErPMk0Hv.jpg",
    genre_ids: [10749],
    id: 518527,
    original_language: "en",
    original_title: "Harry & Meghan: A Royal Romance",
    overview: "",
    popularity: 16.634,
    poster_path: "/2ODzSaM8EKF28mGjNTH3ptb3BJu.jpg",
    release_date: "2018-05-13",
    title: "Harry & Meghan: A Royal Romance",
    video: false,
    vote_average: 6.9,
    vote_count: 151,
  },
  {
    adult: false,
    backdrop_path: "/hNQ0R4wSaXTUPUQti8FtKLf1HQ6.jpg",
    genre_ids: [35, 80, 9648],
    id: 11718,
    original_language: "en",
    original_title: "Who's Harry Crumb?",
    overview:
      "Quando Jennifer Downing (Renée Coleman), a filha do magnata P.J. Downing (Barry Corbin), é sequestrada, o pai está disposto em fazer tudo para ter sua filha de volta. Um amigo, Eliot Draisen (Jeffrey Jones), diz que a única pessoa que poderá ajudá-lo é Harry Crumb (John Candy), o último descendente de uma família de grandes detetives. Acontece que Harry é um profissional decadente, que sempre faz muitas trapalhadas ao tentar resolver os casos. Desta vez talvez as coisas sejam um pouco diferentes, pois Nikki Downing (Shawnee Smith), a irmã de Jennifer, quer ajudá-lo nas investigações.",
    popularity: 7.394,
    poster_path: "/qf7LNguEfBHF9WRs9sKGPBaQYEt.jpg",
    release_date: "1989-02-03",
    title: "Quem é Harry Crumb?",
    video: false,
    vote_average: 5.8,
    vote_count: 179,
  },
  {
    adult: false,
    backdrop_path: "/71gHxSX2Tzg9mi1VYRdwCECfmpj.jpg",
    genre_ids: [35, 14, 10751],
    id: 8989,
    original_language: "en",
    original_title: "Harry and the Hendersons",
    overview:
      "Quando estão voltando das férias, a família Henderson atinge o carro num estranho animal. Eles até chegam a pensar que seja um homem, mas percebem que se trata algo muito diferente: o lendário Pé Grande. Achando que ele está morto, levam o corpo para casa porque alguém poderia pagar algum dinheiro por aquilo. Mas o monstro está vivo e na verdade não tem nada de monstro. O ser gigante ganha o nome de Harry e aos poucos vai se tornando um membro da família. O problema é que os Handerson precisam fazer de tudo para mantê-lo escondido das autoridades.",
    popularity: 8.737,
    poster_path: "/7qqJ3gcYFmV29Gq7xT8g5Pj4WaH.jpg",
    release_date: "1987-06-05",
    title: "Um Hóspede do Barulho",
    video: false,
    vote_average: 5.9,
    vote_count: 433,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [],
    id: 393135,
    original_language: "en",
    original_title: "Harry Potter and the Ten Years Later",
    overview: "",
    popularity: 24.96,
    poster_path: "/zh1KtXxbcfj3wj202aEEE2E8V3n.jpg",
    release_date: "2012-10-07",
    title: "Harry Potter and the Ten Years Later",
    video: false,
    vote_average: 7.3,
    vote_count: 8,
  },
  {
    adult: false,
    backdrop_path: "/mjCYpJXCBYDZgMr1U1KZcFgFDfC.jpg",
    genre_ids: [99],
    id: 482408,
    original_language: "en",
    original_title: "Harry Potter: A History Of Magic",
    overview: "",
    popularity: 16.558,
    poster_path: "/geike7VgTrftxwzcvND4dRdZdAv.jpg",
    release_date: "2017-10-28",
    title: "Harry Potter: A History Of Magic",
    video: false,
    vote_average: 6.8,
    vote_count: 27,
  },
  {
    adult: false,
    backdrop_path: "/vkk55QHMdaFF1gVIwgns2AR3VHA.jpg",
    genre_ids: [35],
    id: 10152,
    original_language: "en",
    original_title: "Dumb and Dumberer: When Harry Met Lloyd",
    overview:
      "Em 1986, Harry Dunne (Derek Richardson) e Lloyd Christmas (Eric Christian Olsen) se conhecem. Ambos estão cursando o colegial e, com um Q.I. bem abaixo do normal e uma grande habilidade em causar confusões, logo se tornam grandes amigos. Juntos eles precisam lidar com os demais estudantes no colégio e com seus próprios pais.",
    popularity: 13.772,
    poster_path: "/mk8FFXBWq25ag2vk8PgcEnxSkHo.jpg",
    release_date: "2003-04-14",
    title: "Debi & Lóide 2: Quando Debi Conheceu Lóide",
    video: false,
    vote_average: 4.1,
    vote_count: 561,
  },
];