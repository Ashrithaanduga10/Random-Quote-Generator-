const quotes = [
  {
    quote: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle"
  }
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerText =
    '"' + quotes[random].quote + '"';

  document.getElementById("author").innerText =
    "- " + quotes[random].author;
}

window.onload = newQuote;
