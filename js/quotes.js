const quotes = [
  {
    quote: "I think, therefore I am",
    author: "Rene Descartes"
  },
  {
    quote: "Every nation gets the government it deserves.",
    author: "Joseph de Maistre"
  },
  {
    quote: "Gott ist tot.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration",
    author: "Thomas Edison"
  },
  {
    quote: "나에게는 다른 길이 없다. 죽어도 이 길을 가야 한다.",
    author: "Lyuh Woon-hyung"
  },
  {
    quote: "진실은 반드시 따르는 자가 있고, 정의는 반드시 이루는 날이 있다.",
    author: "An Changho"
  },
  {
    quote: "리더는 항상 앞장서야 해. 그것이 리더의 의무지.",
    author: "Richard D. Winters"
  },
  {
    quote: "While the theory agrees incredibly with experiment and while it is of profound mathematical beauty, it makes absolutely no sense.",
    author: "Roger Penrose"
  },
  {
    quote: "후회할 거라면 그렇게 살지 말고, 그렇게 살 거라면 절대 후회하지 마라.",
    author: "Murakami Haruki"
  },
  {
    quote: "In mathematics you don`t understand things. You just get used to them.",
    author: "John von Neumann"
  },
  {
    quote: "The world will not be destroyed by those who do evil, but by those who watch them without doing anything.",
    author: "Albert Einstein"
  }
]

const quote = document.querySelector("div#quote span:first-child")
const author = document.querySelector("div#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.textContent = todaysQuote.quote
author.textContent = todaysQuote.author