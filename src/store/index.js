import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        name: "Crypto Prognostic",
        tech: [
          "Vue Js",
          "HTML",
          "CSS",
          "Node Js",
          "Express Js",
          "Mongo DB",
          "Free Api",
        ],
        date: "Nov 2021",
        description:
          "Crypto Prognostic is a web creation that notifies its users according to their needs and requirements. This website includes a form that has complete functioning and options as per the user requirements. Whether you have to buy a bid or sell it to receive the maximum profit, Crypto Prognostic will notify you in all these cases by email so that you can never miss your right second of investment.Not only this, but Crypto Prognostic also has a ‘Prices’ and ‘News’ section ",
        link: "https://cryptoprognostic.netlify.app/",
      },
      {
        name: "Bookbin",
        tech: [
          "Vue Js",
          "HTML",
          "CSS",
          "Google Books Api",
          "NewYork Times Api",
        ],
        date: "March 2021",
        description:
          "Bookbin is a book finding website. I have used google books api and newyork times api for books data. In this website user can find books on the basis of categories, name, author-name, can save there favorite book for future, there is newyork times bestsellers with different categories, also there is a modal giving all information about any book there is link to buy the book too. I have used vuejs for frontend just for learning purposes.",
        link: "https://bookbin.netlify.app/",
      },
      {
        name: "Client Portfolio",
        tech: ["HTML", "CSS", "Javascript"],
        date: "Oct 2021",
        description:
          "This is a UAE based portfolio website. I have made this website for internship purposes. In this I have used html, css and javascript. I have learnt how to work with client, how to communicate with them, how to fulfill there needs.",
        link: "https://umeshagr.netlify.app/",
      },
      {
        name: "My Notes",
        tech: ["HTML", "CSS", "Javascript", "Local Storage"],
        date: "Dec 2020",
        description:
          "This is a notes website. I have used HTML, CSS and Javascript for the frontend development. In this website I have used localstorage to save the notes so that user will not loose them on refreshing the website also there are two modes on the website light mode and dark mode making the website more featureful. User can edit or delete there notes so it is basically working as a CRUD app. I made this just to practice vanilla javascript.",
        link: "https://ridam258.github.io/My-Notes-Website/",
      },
      {
        name: "API Hub",
        tech: ["Vue Js", "HTML", "CSS"],
        date: "March 2021",
        description:
          "This is a free api finding website. In this website frontend is developed with Vue Js. On this website there is category tab with various catrgories on clicking any of them free apis of that catrgory opens on the right side of the screen on clicking any of them user redirects on new tab. This website helps user to find free apis to use them in there projects. I made this for learning use of Vue js and apis working.",
        link: "https://apihub.netlify.app/",
      },
      {
        name: "Terminal War",
        tech: ["Java"],
        date: "April 2021",
        description:
          "This is a terminal based game made with Java. In this game user chooses a deck of cards of players having different cost, health and damage rate then fights with a bot with help of those cards the game ends when any of user or computer looses all their health resulting the other's win. I made this for practicing different concepts of java classes and objects and how to implement them in making any project.  ",
        link: "null.html",
      },
      {
        name: "Scissor Paper Rock Game",
        tech: ["HTML", "CSS", "Javascript"],
        date: "Nov 2020",
        description:
          "This is a very simple website created with HTML, CSS and vanilla javascript just to learn how javascript dom works and how cool frontend can be. In this website there is a play button on pressing that two images appears like two players playing scissor paper and rock the player that wins ten times first wins the game so there is counter keeping track of scores of both the players.",
        link: "https://ridam258.github.io/Rock-paper-scissor/",
      },
      {
        name: "Unit Convertor",
        tech: ["HTML", "CSS", "Javascript"],
        date: "Nov 2020",
        description:
          "This is a very simple website created with HTML, CSS and vanilla javascript just to learn how javascript dom works and how cool frontend can be. In this website there are three section working on different unit conversions that is length convertor, weight convertor and currency convertor. User can input in different units and get result in there chosen unit.",
        link: "https://ridam258.github.io/unit_convertor/",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
